import 'reflect-metadata';

const express = require('express');
const { getGraphQLParameters, processRequest, renderGraphiQL, shouldRenderGraphiQL } = require('graphql-helix');
const { application } = require('./test');

const app = express();

app.use(express.json());

app.use('/graphql', async (req, res) => {
  const request = {
    body: req.body,
    headers: req.headers,
    method: req.method,
    query: req.query,
  };

  if (shouldRenderGraphiQL(request)) {
    res.send(renderGraphiQL());
  } else {
    const { operationName, query, variables } = getGraphQLParameters(request);

    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema: application.schema,
      execute: application.createExecution(),
    });

    if (result.type === 'RESPONSE') {
      result.headers.forEach(({ name, value }) => res.setHeader(name, value));
      res.status(result.status);
      res.json(result.payload);
    } else {
      // graphql-helix also supports subscriptions and incremental delivery (i.e. @defer and @stream directives)
      // out of the box. See the repo for more complete examples that also implement those features.
    }
  }
});

app.listen(4200, () => console.log('Now browse to http://localhost:4200/graphql'));
