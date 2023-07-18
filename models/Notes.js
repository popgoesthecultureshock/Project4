const { Schema } = require('mongoose')

const noteSchema = new Schema(
  {
    // language: { type: Schema.Types.ObjectId, ref: 'Lang' },
    // subject: { type: Schema.Types.ObjectId, ref: 'Subject' },
    content: { type: String, required: true }
    // bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Bookmarks' }]
  },
  { timestamps: true }
)

module.exports = noteSchema
