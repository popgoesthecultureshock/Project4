const { Schema } = require('mongoose')

const bookmarkSchema = new Schema({
  language: { type: Schema.Types.ObjectId, ref: 'Lang' },
  subject: { type: Schema.Types.ObjectId, ref: 'Subject' },
  notes: { type: Schema.Types.ObjectId, ref: 'Notes' },
  url: { type: String },
  label: { type: String }
})

module.exports = bookmarkSchema
