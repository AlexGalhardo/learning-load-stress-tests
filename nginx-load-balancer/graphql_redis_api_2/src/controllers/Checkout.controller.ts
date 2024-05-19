import { redis } from "src/config/redis";
import { CheckoutProductDTO } from "src/models/checkout.dto";

export default class CheckoutController {
    static async seed() {
        try {
            const product = {
                id: "53ae2078-5d7b-406f-8e12-e042ba096465",
                name: "Product Test",
                stock: 35000,
                created_at: new Date().toISOString(),
                updated_at: null,
            };

            await redis.set(`product:${product.id}`, JSON.stringify(product));

            return { success: true, product };
        } catch (error: any) {
            return { success: false, message: error.message };
        }
    }

    static async checkout(checkoutProductPayload: CheckoutProductDTO) {
        const { productId } = checkoutProductPayload;
        const productKey = `product:${productId}`;

        try {
            const transaction = redis.multi();
            transaction.watch(productKey);
            const productData = await redis.get(productKey);
            if (!productData) {
                transaction.discard();
                return { success: false, message: "Product not found" };
            }

            let productFound = JSON.parse(productData);
            if (productFound.stock <= 0) {
                transaction.discard();
                return { success: false, message: "Product out of stock" };
            }

            productFound.stock -= 1;

            transaction.set(productKey, JSON.stringify(productFound));

            const result = await transaction.exec();

            if (result === null) {
                return { success: false, message: "Transaction failed, please try again" };
            }

            return { success: true, product: productFound };
        } catch (error: any) {
            return { success: false, message: error.message };
        } finally {
            await redis.unwatch();
        }
    }
}
