const express = require("express")
const app = new express()
app.use(express.static('files'))
app.listen(process.env.PORT)
console.log(`Site is online, running on port ${process.env.PORT}`)
