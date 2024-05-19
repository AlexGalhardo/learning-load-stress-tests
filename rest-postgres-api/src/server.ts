import { PrismaClient } from "@prisma/client";
import express from "express";
import valiteUserSchema from "./utils/validate-user-schema";
import { randomUUID } from "node:crypto";
import { faker } from "@faker-js/faker";
import { DEFAULT_PRODUCT_ID } from "../prisma/seed";

const app = express();
const prisma = new PrismaClient({
  errorFormat: "minimal",
});

app.use(express.json())
  .get("/", (_req, res) => {
    return res.status(200).json({
      success: true,
      message: "Lets gooo!",
      server: "rest-postgres-api",
    });
  })
  .post("/signup", async (req, res) => {
    try {
      const { name, email, password } = await valiteUserSchema(req.body);

      await prisma.$transaction(async (trx) => {
        const user = await trx.users.create({
          data: {
            name,
            email,
            password,
          },
        });

        return res.status(201).json({
          success: true,
          server: "rest-postgres-api",
          user,
        });
      });
    } catch (error: any) {
      return res.status(406).json({
        success: false,
        server: "rest-postgres-api",
        error: error.message,
      });
    }
  })
  .post("/checkout", async (_req, res) => {
    try {
      await prisma.$transaction(async (trx) => {
        const { stock } = await trx.products.update({
          where: {
            id: DEFAULT_PRODUCT_ID,
            stock: {
              gt: 0,
            },
          },
          data: {
            stock: {
              decrement: 1,
            },
          },
        });

        await trx.checkoutLogs.create({
          data: {
            user_id: randomUUID(),
            user_email: faker.internet.email(),
            product_id: DEFAULT_PRODUCT_ID,
            product_sku: randomUUID(),
          },
        });

        return res.status(200).json({
          success: true,
          server: "rest-postgres-api",
          stock,
        });
      });
    } catch (error: any) {
      return res.status(406).json({
        success: false,
        server: "rest-postgres-api",
        error: error.message,
      });
    }
  })
  .listen(Bun.env.PORT ?? 3333, () => {
    console.log(`\n\nREST POSTGRES API Server for load and stress tests running on http://localhost:${Bun.env.PORT ?? 3333}`);
  });
