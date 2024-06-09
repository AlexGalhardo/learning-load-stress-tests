import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { randomUUID } from "node:crypto";
import { handleHttpExceptionError } from "./utils/handleHttpExceptionError";
import {
	DynamoDBDocumentClient,
	HttpStatusCode,
	DYNAMO_TABLE_CHECKOUTS,
	DYNAMO_TABLE_USERS,
	createUserSchema,
	headers,
} from "./utils/constants";
import Bcrypt from "./utils/bcrypt";

export const createUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	try {
		let reqBody = JSON.parse(String(event.body));

		await createUserSchema.validate(reqBody, { abortEarly: false });

		const result = await DynamoDBDocumentClient.query({
			TableName: DYNAMO_TABLE_USERS,
			IndexName: "EmailIndex",
			KeyConditionExpression: "email = :email",
			ExpressionAttributeValues: {
				":email": String(reqBody.email),
			},
		}).promise();

		if (result.Items?.[0]) {
			return {
				statusCode: HttpStatusCode.BAD_REQUEST,
				headers,
				body: JSON.stringify({
					success: false,
					error: "Email already registered.",
				}),
			};
		}

		reqBody.password = await Bcrypt.hash(reqBody.password);

		const newUser = {
			id: randomUUID(),
			...reqBody,
			created_at: new Date().toISOString(),
			updated_at: null,
		};

		await DynamoDBDocumentClient.transactWrite({
			TransactItems: [
				{
					Put: {
						TableName: DYNAMO_TABLE_USERS,
						Item: newUser,
						ConditionExpression: "attribute_not_exists(email)",
					},
				},
			],
		}).promise();

		return {
			statusCode: HttpStatusCode.CREATED,
			headers,
			body: JSON.stringify({
				success: true,
				data: newUser,
			}),
		};
	} catch (error) {
		return handleHttpExceptionError(error);
	}
};

export const checkout = async (): Promise<APIGatewayProxyResult> => {
	try {
		await DynamoDBDocumentClient.transactWrite({
			TransactItems: [
				{
					Update: {
						TableName: DYNAMO_TABLE_CHECKOUTS,
						Key: {
							id: "1",
						},
						UpdateExpression: "SET stock = if_not_exists(stock, :35000) - :one",
						ConditionExpression: "attribute_exists(id)",
						ExpressionAttributeValues: {
							":one": 1,
							":thousand": 1000,
						},
					},
				},
			],
		}).promise();

		const { Item } = await DynamoDBDocumentClient.get({
			TableName: DYNAMO_TABLE_CHECKOUTS,
			Key: {
				id: "1",
			},
		}).promise();

		return {
			statusCode: HttpStatusCode.CREATED,
			headers,
			body: JSON.stringify({
				success: true,
				stock: Item?.stock
			}),
		};
	} catch (error) {
		return handleHttpExceptionError(error);
	}
};
