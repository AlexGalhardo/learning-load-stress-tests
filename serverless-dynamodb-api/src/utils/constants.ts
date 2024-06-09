import * as yup from "yup";
import AWS from "aws-sdk";

export const DynamoDBDocumentClient = new AWS.DynamoDB.DocumentClient();

export const DYNAMO_TABLE_USERS = String(process.env.DYNAMO_TABLE_USERS) ?? 'k6-users-dev';
export const DYNAMO_TABLE_CHECKOUTS = String(process.env.DYNAMO_TABLE_CHECKOUTS) ?? 'k6-checkouts-dev';

export const createUserSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup
		.string()
		.required()
		.min(8, "Password must has at least 8 characters")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
			"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
		),
});

export const headers = {
	"content-type": "application/json",
};

export enum HttpStatusCode {
	OK = 200,
	CREATED = 201,
	BAD_REQUEST = 400,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500,
}
