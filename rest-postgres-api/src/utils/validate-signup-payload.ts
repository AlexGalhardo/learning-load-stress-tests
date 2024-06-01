import vine, { errors } from "@vinejs/vine";

export interface SignupPayload {
    name: string;
    email: string;
    password: string;
}

const schema = vine.object({
    name: vine.string().maxLength(255),
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
});

export default async function validateSignupPayload(data: SignupPayload) {
    try {
        const validator = vine.compile(schema);
        const validate = await validator.validate(data);
        return validate;
    } catch (error: any) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            throw new Error(error.messages[0].message);
        }
        throw new Error(error.message);
    }
}
