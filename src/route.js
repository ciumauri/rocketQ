const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomControler = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-room', (req, res) =>
  res.render('index', { page: 'create-room' })
)

route.post('/create-rooms', RoomControler.create)
route.get('/room/:room', RoomControler.open)
route.post('/enterroom', RoomControler.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route
