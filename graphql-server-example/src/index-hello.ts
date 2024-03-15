import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'


//Define schema
const typeDefs = `
type Query {
  hello:String    
}

`
//biz logic for query:resolvers
const resolvers = {
    //Query Implementation
    Query: {
        hello() {
            return "Hello GraphQL"
        }
    }
    //Mutation
    //Subscription

}
//create apolloServer
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})
//Web container to deploy graphql server
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
})
console.log('Apollo Server is Ready!')

