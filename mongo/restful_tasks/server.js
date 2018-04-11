const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/tasks');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

const taskSchema = new Schema({
    title: { type: String,
             required: true},
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false },
    }, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

app.get('/tasks', function(request, response) {
    Task.find({})
        .then(data => {
            response.json(data);
        })
        .catch(err => console.log('error', err));
});

app.get('/tasks/:id', function(request, response) {
    Task.findOne({ _id: request.params.id })
        .then(data => {
            response.json(data);
        })
        .catch(err => console.log('error', err));
});

app.post('/tasks', function(request, response) {
    // const task = new Task(request.body);
    // task.save(err => {
    //     if (err) {
    //         console.log('error', err);
    //     } else {
    //         console.log('--task created!--');
    //         response.redirect('/tasks');
    //     }
    // });
    Task.create(request.body)
        .then(task => {
            response.json({ message: "task created successfully!", data: task });
        })
        .catch(err => console.log('error', err));
});

app.put('/tasks/:id', function(request, response) {
    Task.update({ _id: request.params.id }, { $set: request.body })
        .then(task => {
            response.json({ message: "task updated!", data: task });
        })
        .catch(err => console.log('error', err));
});

app.delete('/tasks/:id', function(request, response) {
    Task.remove({ _id: request.params.id })
        .then(() => {
            console.log('--task deleted!--');
            response.redirect('/tasks');
        })
        .catch(err => console.log('error', err));
});

app.listen(port, () => console.log('listening on port', port));