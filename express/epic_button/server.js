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

let count = 0;
io.sockets.on('connection', function(socket) {
    console.log('client/socket is connected');
    socket.on('epic_btn', function() {
        count++;
        console.log('button clicked, count: ' + count);
        io.emit('increment_count', {count: count});
    });
    socket.on('reset_btn', function() {
        count = 0;
        console.log('count reset');
        io.emit('reset_count', {count: count});
    });
});
