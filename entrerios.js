const express = require('express');
const path = require ('path');
const port = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname,'./public')));

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/entrerios.html'))
})

app.get('/register.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/entreriosregister.html'))
})

app.get('/login.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/entrerioslogin.html'))
})

/*
const express = require("express");
const app = express();
app.use(express.static("public"));
const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));*/
/*
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/views/login.html");
});

app.get('/register.',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/register.html'))
})

app.get('/login.',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/login.html'))
})*/
