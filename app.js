var express = require('express');
var http = require('http')
var app = express();
app.get('/', (req, res) => {
    res.send('123')
})
var server = http.createServer(app)
server.listen(1592);
app.use(express.static('util'))