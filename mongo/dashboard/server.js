const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/owls');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

const owlSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    type: String,
}, {
    timestamps: true,
});

const Owl = mongoose.model('Owl', owlSchema);

app.get('/', function(request, response) {
    Owl.find({})
      .then(all_owls => {
          response.render('index', { all_owls });
      })
      .catch(error => {
          console.log('error', error);
      });
});

app.get('/owls/new', function(request, response) {
    response.render('new');
});

app.get('/owls/:id', function(request, response) {
    Owl.findOne({ _id: request.params.id })
      .then(owl => {
          response.render('display', { owl });
      })
      .catch(error => {
          console.log('ID: ' + request.params.id + ' does not exist');
      });
});

app.post('/owls', function(request, response) {
    const owl = new Owl(request.body);
    console.log(owl);
    owl.save(err=> {
        if (err) {
            console.log('error', error);
        }
        else {
            response.redirect('/');
        }
    });
});

app.get('/owls/edit/:id', function(request, response) {
    Owl.findOne({ _id: request.params.id })
      .then(owl => {
          response.render('edit', { owl })
      })
      .catch(error => {
          console.log('ID: ' + request.params.id + ' does not exist');
      });
});

app.post('/owls/:id', function(request, response) {
    Owl.update({ _id: request.params.id }, { $set: { name: request.body.name, age: request.body.age, type: request.body.type, }}, err => {
        if (err) {
            console.log('error', err);
        } else {
            response.redirect('/');
        }
    });
});

app.post('/owls/destroy/:id', function(request, response) {
    Owl.remove({ _id: request.params.id }, err => {
        if (err) {
            console.log('error', err);
        } else {
            response.redirect('/');
        }
    });
});

app.listen(port, function() {
    console.log('listening on port', port);
})
