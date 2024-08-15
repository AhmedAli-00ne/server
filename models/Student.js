const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
},
{
  timestamps: true
},
{
    collection: 'students'
  })

module.exports = mongoose.model('Student', studentSchema)