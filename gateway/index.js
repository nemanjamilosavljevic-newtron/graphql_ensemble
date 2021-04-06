const { findAndParseConfig } = require('@graphql-mesh/config');
const { getMesh } = require('@graphql-mesh/runtime');

async function test() {
  // This will load the config file from the default location (process.cwd)
  const meshConfig = await findAndParseConfig();
  const { execute } = await getMesh(meshConfig);

  // Use `execute` to run a query directly and fetch data from your APIs
  const { data, errors } = await execute(/* GraphQL */ `
    query wikipediaMetrics {
      getMetricsPageviewsAggregateProjectAccessAgentGranularityStartEnd(
        access: ALL_ACCESS
        agent: USER
        start: "20200101"
        end: "20200226"
        project: "en.wikipedia.org"
        granularity: MONTHLY
      ) {
        items {
          views
        }
      }
    }
  `);

  console.log(data);
}

test();
