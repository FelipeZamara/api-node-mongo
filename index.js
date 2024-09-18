const express =  require('express')
const Person = require('./models/Person')
const app =  express()
const mongoose = require("mongoose")

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rotas
app.get('/', (req, res)=>{
    res.json({message:"Rodou!"})
})

//Create
app.post("/person", async (req, res) =>{
    const { name, salary, approved} = req.body;

    const person = {
        name,
        salary,
        approved,
    }

    try{
        await Person.create(person)
        res.status(201).json({message: "Pessoa inserida no sistema com sucesso!"})
    } catch (error){
        res.status(500).json({erro: error})
    }
})
//read
app.get("/person", async (req, res)=>{
    try{
        const peaple = await Person.find()
        res.status(200).json(peaple)
    }catch (error){
        res.status(500).json({erro: error})
    }
})

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Uhul, conectamos!")
    app.listen(3000)
})