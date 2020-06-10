const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//iniciando APp
const app = express()

//iniciando o db
mongoose.connect('mongodb://localhost:27017/apiProductHunt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

requireDir('./src/models')

const Product = mongoose.model('Product')

//Primeira Roda
app.get('/', (request, response) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    })

    return response.send('Hello World')
});

app.listen(3001)