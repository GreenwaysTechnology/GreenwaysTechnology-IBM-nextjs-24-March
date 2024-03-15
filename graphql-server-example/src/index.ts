import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'


//Define schema
const typeDefs = `
type User {
    id:ID
    firstName:String
    lastName:String
    age:Int
    points:Float
    status:Boolean
 }
 type Query {
    user:[User]
  }
`

//biz logic for query:resolvers
const resolvers = {
    //Query Implementation
    Query: {
        user() {
            return [{
                id: 1,
                firstName: 'Subramanian',
                lastName: 'Murugan',
                age: 10,
                points: 10.5,
                status: true
            },
            {
                id: 2,
                firstName: 'Subramanian',
                lastName: 'Murugan',
                age: 10,
                points: 10.5,
                status: true
            },
            {
                id: 3,
                firstName: 'Subramanian',
                lastName: 'Murugan',
                age: 10,
                points: 10.5,
                status: true
            }, {
                id: 4,
                firstName: 'Subramanian',
                lastName: 'Murugan',
                age: 10,
                points: 10.5,
                status: true
            }

            ]
        }
    }
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

