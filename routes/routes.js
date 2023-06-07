const Router = require('express').Router()

// ALL CONTROLER FUNCTIONS
const { 
    getAllUsers,
    getOneUser,
    createOneUser
} = require('../controllers/userControllers')

// ALL ROUTES
Router.route('/users/all').get(getAllUsers)
Router.route('/users/createOne').post(createOneUser)
// TODO
// Router.route('/users/:id').get(getOneUser)
// Router.route('/users/:id').put(updateOneUser)
// Router.route('/users/:id').delete(deleteOneUser)

module.exports = Router