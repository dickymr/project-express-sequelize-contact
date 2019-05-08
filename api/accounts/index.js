const router = require('express').Router()
const controller = require('./controller/controller.js')

router.get('/', controller.get)

router.post('/', controller.post)

router.delete('/:id', controller.delete)

router.put('/:id', controller.put)

router.post('/login', controller.postLogin)

module.exports = router