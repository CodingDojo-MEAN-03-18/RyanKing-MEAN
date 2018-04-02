var express = require('express');
var path = require('path');

var app = express();
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
});

var server = app.listen(8000, function() {
    console.log('listening on port 8000');
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    console.log('client/socket is connected');
    socket.on('posting_form', function(data) {
        console.log('recieved data: ' + data);
        socket.emit('hello', {hello: 'hello'});
        socket.emit('updated_message', {message: "You emitted the following information to the server: " + data});
        socket.emit('random_number', {number: Math.floor(Math.random() * 1000) + 1});
    });
});
