const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//iniciando APp
const app = express()

// permite que envia json para api
app.use(express.json())

//iniciando o db
mongoose.connect('mongodb://localhost:27017/apiProductHunt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

requireDir('./src/models')

//Rotas
app.use('/api', require('./src/routes'))

app.listen(3001)