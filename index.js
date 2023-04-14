const express=require('express')
const bodyParser=require('body-parser')
const mysql = require('mysql');
const path=require('path')

const PORT=3000 || process.env.PORT

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: "ExpressIntegration"       
  });
   
  // open the MySQL connection
  connection.connect(error => {
      if (error){
          console.log("A error has been occurred "
              + "while connecting to database.");       
          throw error;
      }
       
      //If Everything goes correct, Then start Express Server
      app.listen(PORT, ()=>{
          console.log("Database connection is Ready and "
               + "Server is Listening on Port ", PORT);
      })
  });

const app=express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/src/index.html'));
})

app.post('/',(req,res)=>{
    console.log(req.body)
})

app.listen(PORT,(req,res)=>{
    console.log(`listening on port ${PORT}`);
})
