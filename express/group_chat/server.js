const express = require('express');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
});

var server = app.listen(8000, function() {
    console.log('listening on port 8000');
});
var io = require('socket.io').listen(server);

const chat = [];
io.on('connection', socket => {
    console.log('new user connected');
    socket.on('new_user', () => {
        socket.emit('get_chat', {chat: chat});
    })
    socket.on('send_msg', data => {
        console.log('msg recieved: ' + data.message + ' name: ' + data.name);
        chat.push({name: data.name, message: data.message});
        io.emit('new_message', {
            name: data.name,
            message: data.message
        });
    });
});
