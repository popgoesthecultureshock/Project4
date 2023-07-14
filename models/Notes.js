const { Schema } = require('mongoose')

const noteSchema = new Schema(
  {
    content: { type: String, required: true },
    bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Bookmarks' }]
  },
  { timestamps: true }
)

module.exports = noteSchema
