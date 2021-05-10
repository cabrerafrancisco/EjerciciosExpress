const libexpress = require('express');
const path = require('path');
const app = libexpress();

app.get('/' , function(req, res){
    res.sendFile(__dirname + "/index.html")
})
app.get('/saludo' , function(req, res){
    res.send('HOoOoLaAa!!!')
})
app.get('/foto' , function(req, res){
    res.sendFile(__dirname + "/joker.jpg")
})

app.listen(3333); 

