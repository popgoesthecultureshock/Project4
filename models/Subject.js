const { Schema } = require('mongoose')

const subjectSchema = new Schema(
  {
    language: { type: Schema.Types.ObjectId, ref: 'Lang' },
    title: { type: String, required: true },
    notes: [{ type: Schema.Types.ObjectId, ref: 'Notes' }],
    bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Bookmarks' }]
  },
  { timestamps: true }
)

module.exports = subjectSchema
