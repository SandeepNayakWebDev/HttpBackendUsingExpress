var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('<b>Inside the Get request</b>')
})

app.post('/', function (req, res) {
  res.send('Inside the Post Request')
})
 
 app.listen(3000)