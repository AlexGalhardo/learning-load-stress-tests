import prisma from "../config/database";
import validateSignupPayload from "../utils/validate-signup-payload";

export default class AuthController {
    static async signup(request: any, reply: any) {
        try {
            await validateSignupPayload(request.body);

            const { name, email, password } = request.body;

            await prisma.$transaction(async (trx) => {
                const user = await trx.users.create({
                    data: {
                        name,
                        email,
                        password,
                    },
                });

                reply.statusCode = 201;
                return reply.send({
                    success: true,
                    user,
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
