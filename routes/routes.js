const Router = require('express').Router()

// ALL CONTROLER FUNCTIONS
const { getAllUsers, getOneUser, createOneUser } = require('../controllers/userControllers')

Router.route('/users/all').get(getAllUsers)
// Router.route('/users/one').get(getOneUser)
Router.route('/users/createOne').post(createOneUser)
    

module.exports = Router