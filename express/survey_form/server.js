const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const session = require('express-session');
app.use(session({secret: 'thisissecret'}));

app.get('/', function(request, response) {
    response.render('index');
});

app.post('/submit', function(request, response) {
    request.session.name = request.body.name;
    request.session.location = request.body.location;
    request.session.language = request.body.language;
    request.session.comments = request.body.comments;
    response.redirect('/result');
});

app.get('/result', function(request, response) {
    response.render('result', {data: request.session});
});

app.listen(8000);
