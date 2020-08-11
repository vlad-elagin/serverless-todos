import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

import { ICreateTodoDTO, ITodo } from "../../typings/todos";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const body: ICreateTodoDTO = JSON.parse(event.body);

  if (!body || !body.title) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "No title provided" }),
    };
  }

  const { title, priority, description } = body;

  const todo: ITodo = {
    title,
    description: description || "",
    priority: priority || "medium",
    status: "IN_PROGRESS",
    createdAt: new Date().toISOString(),
  };

  return {
    statusCode: 201,
    body: JSON.stringify({ todo }),
  };
};
