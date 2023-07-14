const { Schema } = require('mongoose')

const bookmarkSchema = new Schema({
  url: { type: String }
})

module.exports = bookmarkSchema
