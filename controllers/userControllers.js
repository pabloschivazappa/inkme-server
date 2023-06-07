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
    try {
        const oneUser = await User.find({"_id":req.params.id})
        return res.status(200).json(oneUser)
    } catch (error) {
        next(error)
    }
}

const createOneUser = async (req, res, next) => {
    try {
        const {username, email, password} = req.body
              
        if(!email || !password || !username) throw new ErrorStatus('missing fields', 400)
        
        // TODO BRING IN JWT
        // const hash = await bcrypt.hash(password, 10);

        // const { lat, lon } = await getGeoLocationByPostalCode(postalCode)
           
        // TODO SEND BACK USER CREATED WITH ID FROM DB

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

// TODO UPDATE USER INFORMATION
const updateOneUser = async (req, res, next) => {
    console.log("updateOneUser");
    console.log(req.params.id);
}

const deleteOneUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id)
        return res.json(deletedUser)
    }catch(error){
        next(error)
    }
}

module.exports = {
    getAllUsers,
    createOneUser,
    getOneUser,
    updateOneUser,
    deleteOneUser
}

