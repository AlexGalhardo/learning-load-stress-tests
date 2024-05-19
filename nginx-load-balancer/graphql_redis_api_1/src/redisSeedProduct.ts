import { exit } from "process";
import CheckoutController from "./controllers/Checkout.controller";

async function seedRedis() {
    try {
        await CheckoutController.seed();
        console.log("Redis seeded");
        exit(0);
    } catch (error) {
        throw new Error("Error seeding redis => ", error);
    }
}

seedRedis();
