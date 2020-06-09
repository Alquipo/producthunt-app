const express = require('express')
const mongoose = require('mongoose')

//iniciando APp
const app = express()

//iniciando o db
mongoose.connect('mongodb://localhost:27017/apiProductHunt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//Primeira Roda
app.get('/', (request, response) => {
    response.send('Hello World')
});

app.listen(3001)