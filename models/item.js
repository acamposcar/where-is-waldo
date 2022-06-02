const mongoose = require('mongoose')

const { Schema } = mongoose

const ItemSchema = new Schema(
  {
    name: { type: String, required: true },
    top: { type: Number, required: true },
    left: { type: Number, required: true },
    image: { type: String, required: true },
    found: { type: Boolean, required: true, default: false }
  }

)

// Export model
module.exports = mongoose.model('Item', ItemSchema)
