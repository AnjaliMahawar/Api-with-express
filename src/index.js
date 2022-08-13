//console.log('hello from anjali')
const express =require('express');

const app=express()
require('dotenv').config()

const { testRoute } = require('./routes/test/testRoute');
app.use(testRoute)

let port=process.env.PORT;

app.listen(port,()=>{
    console.log("server is running on port "+port)
})