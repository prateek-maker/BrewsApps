require('dotenv').config()
const express = require('express') 
const cors = require('cors')
require('./dbConfig')
const app = express() 



app 
  .use(cors())  //Handle the cors error
  .use(express.json())
  .use(function (req,res,next)  { 

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Acess-Control-Allow-Headers.Origin,X-Request-with,application/json,Accept');
       
    next();

  })

  .use(require('./router')) 

.listen(process.env.PORT,() => {
     console.log(`Server listening on ${process.env.PORT}`);
})