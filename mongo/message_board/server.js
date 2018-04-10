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
mongoose.connect('mongodb://localhost/message_board');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

const postSchema = new Schema({
    name: { type: String, required: true, minlength: 4 },
    content: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, {
    timestamps: true
});

const commentSchema = new Schema({
    name: { type: String, required: true, minlength: 4 },
    content: { type: String, required: true },
    _post: { type: Schema.Types.ObjectId, ref: 'Post' },
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);

app.get('/', function(request, response) {
    Post.find({})
      .populate('comments')
      .then( all_posts => {
          response.render('index', { all_posts });
      })
      .catch(error => {
          console.log('error', error);
      });
});

app.post('/add_post', function(request, response) {
    const message = new Post(request.body);
    message.save(err=> {
        if (err) {
            console.log('error', err);
        } else {
            response.redirect('/');
        }
    });
});

app.post('/add_comment/:id', function(request, response) {
    Post.findOne({ _id: request.params.id}, function(err, post) {
        const comment = new Comment(request.body);
        comment._post = post._id;
        comment.save(err => {
            post.comments.push(comment);
            post.save(err => {
                if (err) {
                    console.log('error', err);
                } else {
                    response.redirect('/');
                }
            })
        })
    })
});

app.listen(port, function() {
    console.log('listening on port', port);
});
