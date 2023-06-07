const Router = require('express').Router()

// ALL CONTROLER FUNCTIONS
const { getAllUsers, getOneUser } = require('../controllers/userControllers')

Router.route('/users/all').get(getAllUsers)
Router.route('/users/one').get(getOneUser)
    

module.exports = Router