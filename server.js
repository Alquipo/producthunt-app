const express = require("express")

const app = express()

app.get('/', (request, response) => {
    res.send('Hello World')
});

app.listen(3001)