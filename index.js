const express=require('express')
const bodyParser=require('body-parser')
const mongoose = require('mongoose');
const path=require('path')
const Model=require('./models/model')
require('dotenv').config()

const PORT=3000 || process.env.PORT
const mongoString=process.env.DATABASE_URL

const app=express()

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname))
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/src/index.html'));
})

app.post('/',(req,res)=>{
    const params=req.body
    const data = new Model({
        name: params.name,
        socials: params.socials,
        email:params.email,
        category:params.category,
        title:params.title,
        description:params.description
    })
    try {
        const dataToSave = data.save();
        res.send("Ideas Submitted succesfully")
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
    
})

app.get('/user/getIdeas', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

app.listen(PORT,(req,res)=>{
    console.log(`listening on port ${PORT}`);
})
