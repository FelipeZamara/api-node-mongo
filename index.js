const express =  require('express')
const app =  express()

app.listen(3000)
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