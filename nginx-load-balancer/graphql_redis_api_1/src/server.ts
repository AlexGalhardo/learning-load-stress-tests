import { Elysia } from "elysia";
import { apollo, gql } from "@elysiajs/apollo";
import { cors } from "@elysiajs/cors";
import AuthController from "./controllers/Auth.controller";
import ToDoController from "./controllers/ToDo.controller";
import CheckoutController from "./controllers/Checkout.controller";

new Elysia()
	.use(
		cors({
			origin: "*",
		}),
	)
	.use(
		apollo({
			typeDefs: gql`
                type ToDo {
                    id: String
                    user_id: String
                    user_email: String
                    title: String
                    done: Boolean
                    updated_at: String
                    created_at: String
                }

                type User {
                    id: ID!
                    name: String!
                    email: String!
                    password: String!
                    updated_at: String
                    created_at: String
                    jwt_token_session: String
                }

                type Product {
                    id: ID!
                    name: String!
                    stock: Int!
                    updated_at: String
                    created_at: String
                }

                type authResponse {
                    success: Boolean!
                    user: User
                    message: String
                }

                type toDoResponse {
                    success: Boolean!
                    message: String
                    todo: ToDo
                }

                type checkoutResponse {
                    success: Boolean!
                    message: String
                    product: Product
                }

                type allToDosResponse {
                    success: Boolean!
                    message: String
                    todos: [ToDo]
                }

                type Query {
                    toDo(id: String!): ToDo
                    allToDos: allToDosResponse
                    getToDoById(id: String!): toDoResponse
                }

                type Mutation {
                    signup(name: String!, email: String!, password: String!): authResponse
                    login(email: String!, password: String!): authResponse
                    newToDo(title: String!): toDoResponse
                    updateToDo(id: String!, title: String!, done: Boolean!): toDoResponse
                    deleteToDo(id: String!): toDoResponse
                    checkout(productId: String!): checkoutResponse
                }
            `,
			resolvers: {
				Mutation: {
					signup: async (_, params) => AuthController.signup(params),
					login: async (_, params) => AuthController.login(params),
					newToDo: async (_, params, context: { authorization: string }) =>
						ToDoController.newToDo(params, context),
					updateToDo: async (_, params, context: { authorization: string }) =>
						ToDoController.updateToDo(params, context),
					deleteToDo: async (_, params, context: { authorization: string }) =>
						ToDoController.deleteToDo(params, context),
					checkout: async (_, params, context) => CheckoutController.checkout(params),
				},
				Query: {
					allToDos: async (_, __, context: { authorization: string }) => ToDoController.allToDos(context),
					getToDoById: async (_, params, context: { authorization: string }) =>
						ToDoController.getToDoById(params, context),
				},
			},
			context: async ({ request }) => {
				const authorization = request.headers.get("authorization");
				return {
					authorization,
				};
			},
		}),
	)
	.derive(({ headers }) => {
		const auth = headers["authorization"];
		return {
			authorization: auth?.startsWith("Bearer ") ? auth.slice(8) : "Header authorization token not found",
		};
	})
	.listen(3000, () => {
		console.log(`NGINX GraphQL Redis API 1 running at http://localhost:3000/graphql`);
	});
