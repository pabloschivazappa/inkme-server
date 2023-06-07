const getAllUsers = async (req, res, next) => {
    res.send("Hello there")
    // try {
    //     const allUsers = await UserCollection.find()
    //     return res.status(200).json(allUsers)
    // } catch (error) {
    //     next(error)
    // }
}

module.exports = {
    getAllUsers
}

