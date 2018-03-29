const express = require('express');
const app = express();

const ejs = require('ejs');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const session = require('express-session');
app.use(session({secret: 'thisissecret'}));

app.get('/', function(request, response) {
    if (!(request.session.count)) {
        request.session.count = 0;
    }

    request.session.count += 1;
    response.render('index', {count: request.session.count});
});

app.post('/add_two', function(request, response) {
    request.session.count += 1;
    response.redirect('/');
});

app.post('/clear', function(request, response) {
    delete request.session.count;
    response.redirect('/');
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});
