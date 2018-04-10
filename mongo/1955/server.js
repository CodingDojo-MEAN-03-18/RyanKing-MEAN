const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/1955');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

const personSchema = new Schema({
    name: { type: String, required: true }
});

const Person = mongoose.model('Person', personSchema);

app.get('/', function(request, response) {
    Person.find({})
        .then(data => {
            response.json(data);
        })
        .catch(err => console.log('error', err));
});

app.get('/new/:name', function(request, response) {
    Person.create({ name: request.params.name })
        .then(person => {
            console.log(person);
            response.redirect('/');
        })
        .catch(err => console.log('error', err));
});

app.get('/remove/:name', function(request, response) {
    Person.remove({ name: request.params.name }, err => {
        if (err) {
            console.log('error', err);
        } else {
            response.redirect('/');
        }
    });
});

app.get('/:name', function(request, response) {
    Person.find({ name: request.params.name })
        .then(person => {
            response.json(person);
        })
        .catch(err => console.log('error', err));
});

app.listen(port, () => console.log('listening on port', port));