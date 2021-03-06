const express = require('express')
const router = express.Router()

const notesController = require('../app/controllers/notesControllers')
const categoriesController = require('../app/controllers/categoryController')
const usersController = require('../app/controllers/UsersController')

const { authenticateUser } = require('../app/middlewares/authentication')
const {upload} = require('../app/middlewares/multer' )

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)
router.delete('/users/logout', authenticateUser, usersController.logout)

router.get('/notes', authenticateUser, notesController.list)
router.get('/notes/count', authenticateUser, notesController.count)
router.get('/notes/:id', authenticateUser, notesController.show)
router.post('/notes', upload.single('picture'), authenticateUser, notesController.create)
router.put('/notes/:id', upload.single('picture'), authenticateUser, notesController.update)
router.delete('/notes/:id', authenticateUser, notesController.destroy)

router.get('/categories', authenticateUser, categoriesController.list)
router.get('/categories/:id', authenticateUser, categoriesController.show)
router.post('/categories', authenticateUser, categoriesController.create)
router.put('/categories/:id', authenticateUser, categoriesController.update)
router.delete('/categories/:id', authenticateUser, categoriesController.destroy)

module.exports = router
