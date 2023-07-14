const { Schema } = require('mongoose')

const subjectSchema = new Schema(
  {
    title: { type: String, required: true },
    notes: [{ type: Schema.Types.ObjectId, ref: 'Notes' }]
  },
  { timestamps: true }
)

module.exports = subjectSchema
