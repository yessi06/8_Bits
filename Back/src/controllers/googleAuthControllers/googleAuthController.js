const { User, Background } = require('../../db')

const findUser = async (email) => {
    const existingUser = await User.findOne({
        where: {email}
    })

    return existingUser;

}

const createUserGoogle = async ({ email, name, lastname, password, disable, admin }) => {
    const createdUser = await User.create({
        name, 
        email, 
        lastname,
        password,
        disable,
        admin,
    })
     let userId = createdUser.id

     const background = await Background.create({userId});

    return createdUser;
}

module.exports = {findUser, createUserGoogle};