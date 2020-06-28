import express from 'express'
import { ApolloServer} from 'apollo-server-express'
import * as Mongoose from 'mongoose'
import path from 'path'

import { typeDefs } from './src/backend/typeDefs'
import { resolvers } from './src/backend/resolvers'
const startServer = async () => {
	const app = express()
	const host = '0.0.0.0'
	const port = process.env.PORT


	const server = new ApolloServer({typeDefs, resolvers})
	server.applyMiddleware(app)
	app.use(express.static(path.join(__dirname, '/build') ))

	await mongoose.connect('mongodb://localhost:27017/billy',
			       {useNewUrlParser:true, useUnifiedTopology:true}) 

	app.get('/', (req, res) => { res.sendFile('index.html')})

	app.listen(port, host, () => console.log(`server starting @ ${host}:${port}`)
}
