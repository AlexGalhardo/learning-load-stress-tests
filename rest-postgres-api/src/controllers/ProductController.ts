import { randomUUID } from "node:crypto";
import { faker } from "@faker-js/faker";
import { DEFAULT_PRODUCT_ID } from "../../prisma/seed";
import prisma from "../config/database";
// import os from 'os'

export default class ProductController {
    static async checkout(_: any, reply: any) {
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

                // const cpuInfo = os.cpus();

                reply.statusCode = 200;
                return reply.send({
                    success: true,
                    stock,
                    // cpuInfo
                });
            });
        } catch (error: any) {
            reply.statusCode = 406;
            return reply.send({
                success: false,
                error: error.message,
            });
        }
    }
}
