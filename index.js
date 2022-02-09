// importar o express
const express =require('express');
const res = require('express/lib/response');
//crar um servidor
const app = express();
//criar uma rota / inveriar wiews/index.html
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '.views/index.html')
})

// rodar o sef
app.listen(3000, ()=>{console.log('Servidor rodando na porta 3000')})