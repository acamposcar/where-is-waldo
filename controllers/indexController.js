const Level = require('../models/level')
const Ranking = require('../models/ranking')
const Item = require('../models/item')

exports.getLevels = async (req, res, next) => {
  try {
    const levels = await Level.find().populate('items').populate('ranking')
    return res.status(200).json({ levels })
  } catch (err) {
    return next(err)
  }
}

exports.updateRanking = async (req, res, next) => {
  const name = req.body.name
  const time = parseFloat(req.body.time)
  if (name.length < 1 || time < 1) {
    return res.status(404).json({
      error: 'Validation error'
    })
  }
  try {
    const person = await new Ranking({
      name,
      time
    }).save()
    const updatedLevel = await Level.findByIdAndUpdate(req.params.levelId, { $push: { ranking: person } }, { new: true })
    if (!updatedLevel) {
      return res.status(404).json({
        error: 'No level found'
      })
    }
    return res.status(200).json({ updatedLevel })
  } catch (err) {
    return next(err)
  }
}
