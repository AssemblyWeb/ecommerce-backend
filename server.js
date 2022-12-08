require('dotenv').config()
const fs = require('fs')
const app = require('./app')
const { Server: httpServer } = require("http");

const PORT = process.env.PORT || 8080

const server = httpServer(app);

server.listen(PORT, () => {
    console.log(`Server listen on port http://localhost:${PORT}`)
})


