const mongoose = require('mongoose')

const { Schema } = mongoose

const LevelSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    ranking: [{ type: Schema.Types.ObjectId, ref: 'Ranking' }],
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
  }

)

// Export model
module.exports = mongoose.model('Level', LevelSchema)
