import Fastify from "fastify";
import AuthController from "./controllers/AuthController";
import ProductController from "./controllers/ProductController";

const fastify = Fastify({
    logger: false,
});

fastify
    .get("/", (_req, reply) => {
        return reply.status(200).send({
            success: true,
            message: "API is on, lets gooo!",
        });
    })
    .post("/signup", (request, reply) => AuthController.signup(request, reply))
    .post("/checkout", (request, reply) => ProductController.checkout(request, reply))
    .listen({ port: Number(process.env.PORT) ?? 3333, host: "0.0.0.0" }, (err, _) => {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }

        console.log(
            `\n\nREST POSTGRES API Server for load and stress tests running on http://localhost:${process.env.PORT ?? 3333}`,
        );
    });
