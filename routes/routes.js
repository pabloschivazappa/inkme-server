const Router = require('express').Router()

// ALL CONTROLER FUNCTIONS
const { 
    getAllUsers,
    getOneUser,
    createOneUser,
    updateOneUser,
    deleteOneUser
} = require('../controllers/userControllers')

// ALL ROUTES
Router.route('/users/all').get(getAllUsers)
Router.route('/users/createOne').post(createOneUser)
Router.route('/users/:id').get(getOneUser)
Router.route('/users/:id').put(updateOneUser)
Router.route('/users/:id').delete(deleteOneUser)
// TODO SIGN UP
// TODO LOG IN
// TODO LOG OUT

module.exports = Router