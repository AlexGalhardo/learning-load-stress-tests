import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
	errorFormat: "pretty",
});

export const DEFAULT_PRODUCT_ID = "91f2f7d6-4e3d-4ba3-b674-1168d0096755"

const seedDatabase = async () => {
	await prisma.users.deleteMany({});
	await prisma.products.deleteMany({});
	await prisma.checkoutLogs.deleteMany({});

	await prisma.products.create({
		data: {
			product_id: DEFAULT_PRODUCT_ID,
			name: "Product Test",
			stock: 35000,
		},
	});
};

seedDatabase();
