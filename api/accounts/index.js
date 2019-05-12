const router = require('express').Router()
const controller = require('./controller/controller.js')
const helpers = require('../helpers/index.js')

// router.get('/', helpers.isAuthenticated, controller.getAllAccounts)
router.post('/login', controller.postLogin)

router.get('/accounts/', controller.getAllAccounts)

router.post('/accounts/', controller.postCreateAccount)

router.delete('/accounts/:id', controller.deleteAccount)

router.put('/accounts/:id', controller.updateAccount)

router.get('/department/', controller.getAllDepartment)

router.post('/department/', controller.postCreateDepartment)

module.exports = router