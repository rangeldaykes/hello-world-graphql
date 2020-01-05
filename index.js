const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
//const { graphql, buildSchema } = require('graphql')

const schema = gql(`
    type Query {
        olaMundoQry: String!
    }
`)

const resolvers = {
    Query: {
        olaMundoQry: () => 'Olá mundo graphql'
    }
}

//graphql(schema, '{olaMundoQry}', resolver)
//.then(resposta => console.log(resposta)
//)

const server = new ApolloServer(
    { typeDefs: schema, resolvers }
)

const app = express()
server.applyMiddleware({ app })

app.listen({port: 4000}, () => console.log
    (`Servidor rodando na porta localhost:4000${server.graphqlPath}`))