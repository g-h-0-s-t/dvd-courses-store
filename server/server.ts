import express from 'express'
import { ApolloServer} from 'apollo-server-express'
import * as mongoose from 'mongoose'
import path from 'path'
import CourseSchema from './resolvers/Course'

const startServer = async () => {
	const app = express()
	const host = '0.0.0.0'
	const port:any = process.env.PORT || 8080 

	const server = new ApolloServer({schema:CourseSchema})
	server.applyMiddleware({ app })
	app.use(express.static(path.join(__dirname, '/build') ))

	mongoose.connect('mongodb://localhost:27017/billy', {useNewUrlParser:true, useUnifiedTopology:true})

	app.get('/', (req, res) => { res.sendFile('index.html')})

	app.listen(port, host, () => console.log(`server starting @ ${host}:${port}`)
}
