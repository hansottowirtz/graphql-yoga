import { createServer } from 'http'

import { createSchema, createYoga } from 'graphql-yoga'

// 1. Please add the schema that causes your issue here
const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
  `,
})

// 2. Please add the operations that causes your issue here
const defaultQuery = /* GraphQL */ `
  query Hello {
    hello
  }
`

// 3. Please adjust the createYoga setup for the issue you are experiencing
const yoga = createYoga({
  graphiql: {
    defaultQuery,
  },
  schema,
})

const server = createServer(yoga)
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})
