/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
  endpoint: 'http://localhost:4000/graphql',
  enumsAsStrings: false,
  react: true,
  scalars: { DateTime: 'string' },
  preImport: '',
  introspection: { endpoint: '../../gateway/schema.graphql', headers: {} },
  destination: './src/gqless/index.ts',
  subscriptions: false,
};

module.exports = config;

