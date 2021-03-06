import {ApolloServer} from 'apollo-server'
import {makeSchema} from 'nexus'
import {join} from 'path'
import * as types from './graphql/index.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const schema = makeSchema({
    types,
    outputs: {
        typegen: join(__dirname, '.', 'schema/nexus-typegen.ts'), // 2
        schema: join(__dirname, '.', 'schema/schema.graphql'), // 3
    },
})

const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
})

const PORT = process.env.PORT || 4010

server.listen({port:PORT}).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`)
})
