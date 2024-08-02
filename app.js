import express from "express"


const servidor = express()
servidor.use(express.json)

servidor.get(`/calculadora/:n1/:n2`, (req,resp)=>{
let n1 = Number(req.params.n1);
let n2 = Number(req.params.n2);
let soma = n1 + n2
resp.send({

    entrada:{
        num1:n1,
        num2:n2
    },
     soma:soma
})

})


servidor.listen(

    5001,
    () => console.log(`Subiu na porta 5001`)
)