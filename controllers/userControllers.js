const User = require('../models/userModels')

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await User.find()
        return res.status(200).json(allUsers)
    } catch (error) {
        next(error)
    }
}

const getOneUser = async (req, res, next) => {
    console.log("getOneUser");
    console.log(req.params.id);
    // try {
    //     const allUsers = await UserCollection.find()
    //     return res.status(200).json(allUsers)
    // } catch (error) {
    //     next(error)
    // }
}

const createOneUser = async (req, res, next) => {
    try {
        const {username, email, password} = req.body
              
        if(!email || !password || !username) throw new ErrorStatus('missing fields', 400)
        
        // const hash = await bcrypt.hash(password, 10);

        // const { lat, lon } = await getGeoLocationByPostalCode(postalCode)
           
        

        const { _id } = await User.create({
            email,
            // password: hash,
            password,
            username
        })

        // token = jwt.sign({ _id }, process.env.JWT_SECRET)

        // return res.cookie('token', token, { 
        //     httpOnly: true,
        //     maxAge: 1000 * 60 * 60 * 12,
        //     sameSite: 'none',
        //     secure: true
        // }).sendStatus(201)
        res.send('User Created').sendStatus(201)
    } catch (error) {
        next(error)
    }
}

const updateOneUser = async (req, res, next) => {
    console.log("updateOneUser");
    console.log(req.params.id);
}

const deleteOneUser = async (req, res, next) => {
    console.log("deleteOneUser");
    console.log(req.params.id);
}


module.exports = {
    getAllUsers,
    createOneUser,
    getOneUser,
    updateOneUser,
    deleteOneUser
}

