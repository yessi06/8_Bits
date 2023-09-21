const { Router } = require('express');
const { createUser, getUsers, loginUser, logOutUser, updateUser } = require('../handlers/userHandler');
const {validateCreateUser} = require('../middleware/validate')

const userRouter = Router();

userRouter.post('/login', loginUser);
userRouter.get('/', getUsers);
userRouter.post('/signup', validateCreateUser, createUser);
userRouter.get('/logout', logOutUser);
userRouter.put('/update/:id', updateUser)

module.exports = userRouter;