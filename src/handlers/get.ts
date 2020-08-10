import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Here are your todos mate, enjoy",
        input: event,
      },
      null,
      2
    ),
  };
};
