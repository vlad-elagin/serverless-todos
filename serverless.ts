import { Serverless } from "serverless/aws";

const serverlessConfiguration: Serverless = {
  service: {
    name: "todos",
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  frameworkVersion: ">=1.72.0",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  // Add the serverless-webpack plugin
  plugins: ["serverless-webpack"],
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    region: "eu-west-1",
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
  },
  functions: {
    get: {
      handler: "src/handlers/get.handler",
      events: [
        {
          http: {
            method: "get",
            path: "/todo",
          },
        },
      ],
    },
    create: {
      handler: "src/handlers/create.handler",
      events: [
        {
          http: {
            method: "post",
            path: "/todo",
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
