//console.log('hello from anjali')
const express =require('express');
const { testRoute } = require('./routes/test/testRoute');
const app=express()
require('dotenv').config()
app.use(testRoute)



let port=process.env.PORT;

app.listen(port,()=>{
    console.log("server is running on port "+port)
})