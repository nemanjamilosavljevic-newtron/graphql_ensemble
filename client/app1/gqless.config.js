import { GraphQLDateTime } from "graphql-scalars";
/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
  enumsAsStrings: true,
  react: true,
  scalarTypes: { DateTime: GraphQLDateTime },
  introspection: { endpoint: "../../gateway/schema.graphql", headers: {} },
  destination: "./src/gqless/index.ts",
  subscriptions: false,
};

module.exports = config;
