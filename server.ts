const express = require('express')
const path = require('path')
const app = express()
const host = '0.0.0.0'
const port = process.env.PORT

app.use(express.static(path.join(__dirname, '/build') ))
app.get('/', (req, res) => { res.sendFile('index.html')})
app.get('/coming-soon', (req, res) => { res.sendFile('index.html')})

app.listen(port, host, () => console.log('server starting'))

