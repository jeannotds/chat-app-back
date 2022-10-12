const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')

const rooms = ['general', 'tech', 'finance', 'cripto'];
const cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/users', userRoutes)

require('./connection')

const server = require('http').createServer(app);

const port = 5002;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        sethods: ['GET', 'POST']
    }
})

server.listen(port, () => {
    console.log(`Listernig to port : ${port}`)
})
