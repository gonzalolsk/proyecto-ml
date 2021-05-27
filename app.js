const express = require('express')
const app = express()
const path = require('path')


app.set("port" , process.env.PORT|| 3000)

// app.listen(3030, ()=> console.log('ya esta corriendo el servidor'));

app.listen(app.get("port"),()=>console.log("Server Start http://localhost"+app.get("port")));
app.get('/',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'home.html')))

app.use(express.static(path.resolve(__dirname,'public')))

app.get('/register',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'register.html')))
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'login.html')))