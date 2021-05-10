const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('HOLA MUNDO')
})

app.listen(3000)