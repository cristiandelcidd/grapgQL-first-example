import express from 'express'
import { graphqlHTTP } from 'express-graphql'

import { resolvers } from './resolvers'
import { schema } from './squema'

const app = express()

app.get('/', ( req, res ) => {
    res.send( 'Hola Mundo' )
})

const root = resolvers

app.use( '/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen( 8081, () => console.log( 'Listening on port 8081' ) )