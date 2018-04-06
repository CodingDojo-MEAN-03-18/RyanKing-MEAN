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
mongoose.connect('mongodb://localhost/quotes');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

const quoteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Quote = mongoose.model('Quote', quoteSchema);

app.get('/', function(request, response) {
    response.render('index');
});

app.get('/quotes', function(request, response) {
    Quote.find({})
      .then(all_quotes => {
          response.render('quotes', { all_quotes });
      })
      .catch(error => {
          console.log('error', error);
      })
});

app.post('/quotes', function(request, response) {
    const quote = new Quote(request.body);
    quote.save(err => {
        if (err) {
            response.render('index', {errors: quote.errors});
        }
        else {
            response.redirect('/quotes');
        }
    });
})

app.listen(port, function() {
    console.log('listening on port', port);
});
