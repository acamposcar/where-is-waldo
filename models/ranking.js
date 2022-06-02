const mongoose = require('mongoose')

const { Schema } = mongoose

const RankingSchema = new Schema(
  {
    name: { type: String, required: true },
    time: { type: Number, required: true },
    date: { type: Date, required: true, default: Date.now }
  }

)

// Export model
module.exports = mongoose.model('Ranking', RankingSchema)
