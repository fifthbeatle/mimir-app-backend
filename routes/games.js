const express = require('express')
const router = express.Router()

const Game = require("../models/game")

router.get('/', async (req, res) => {
  try {
    const games = await Game.find()
    res.json(games)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const game = await Game.find({
      gameId: req.params.id
    })
    if (game.length > 0) {
      res.status(200).json(game)
    } else {
      res.status(404).json({ message: `Game with ID ${req.params.id} not found.` })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  const newGame = new Game({
    numPlayers: req.body.numPlayers,
    numDirects: req.body.numDirects,
    numRounds: req.body.numRounds,
    players: req.body.players,
    scoreTable: req.body.scoreTable,
    fileName: req.body.fileName,
    gameId: req.body.gameId,
  })

  try {
    const newCreatedGame = await newGame.save()
    res.status(201).json(newCreatedGame)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router