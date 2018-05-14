const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  position: {
    type: String,
    trim: true,
  },
  status1: {
    type: String,
    default: 'undecided',
  },
  status2: {
    type: String,
    default: 'undecided',
  },
  status3: {
    type: String,
    default: 'undecided',
  },
});

module.exports = mongoose.model('Player', playerSchema);
