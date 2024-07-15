//loads .env file contents contents into process.env  by default
require('dotenv').config();
const express = require('express')
const cors = require('cors')
const router = require('./Router/router')
require ('./DB/connection');

//create express server

const pfServer = express()

pfServer.use(cors())
//parse incoming requests as form or JSON
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

//create a port  for the application to run on, defaults to 4000 if not provided
const PORT =  4000 || process.env.PORT ;
//listening at 4000
pfServer.listen(PORT , () => {
    console.log(`Project Fair started running At: ${PORT} and waiting for client request`)
});

pfServer.get('/',(req,res)=>{
    res.send(`<h1>Welcome To Project Fair !!!!</h1>`);
})



// pfServer.post ('/', (req, res) =>{
//     res.send("post request")
// })
// pfServer.put ('/', (req, res) =>{
//     res.send("put request")
// })
