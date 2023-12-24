const mongoose = require('mongoose')


const gameSchema = new mongoose.Schema({
  numPlayers: {
    type: Number,
    required: true
  },
  numDirects: {
    type: Number,
    required: true
  },
  numRounds: {
    type: Number,
    required: true,
  },
  gameId: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    require: true,
  },
  players: {
    type: Array,
    require: true,
  },
  scoreTable: {
    type: Object,
    require: true,
  }
})

module.exports = mongoose.model('Game', gameSchema)