const { Schema } = require('mongoose')

const langSchema = new Schema(
  {
    name: { type: String, required: true },
    subject: [{ type: Schema.Types.ObjectId, ref: 'Subject' }]
  },
  { timestamps: true }
)

module.exports = langSchema
