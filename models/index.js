const mongoose = require('mongoose')
const userSchema = require('./User')
const langSchema = require('./Lang')
const subjectSchema = require('./Subject')
const noteSchema = require('./Notes')
const bookmarkSchema = require('./Bookmarks')

const User = mongoose.model('User', userSchema)
const Lang = mongoose.model('Lang', langSchema)
const Subject = mongoose.model('Subject', subjectSchema)
const Notes = mongoose.model('Notes', noteSchema)
const Bookmarks = mongoose.model('Bookmarks', bookmarkSchema)

module.exports = {
  User,
  Lang,
  Subject,
  Notes,
  Bookmarks
}
