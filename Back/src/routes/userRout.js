const { Router } = require('express');
const { createUser, getUsers, loginUser, logOutUser,getUserById } = require('../handlers/userHandler');
const {validateCreateUser} = require('../middleware/validate')

const userRouter = Router();

userRouter.post('/login', loginUser);
userRouter.get('/', getUsers);
userRouter.post('/signup', validateCreateUser, createUser);
userRouter.get('/logout', logOutUser);
userRouter.get('/:id', getUserById)

module.exports = userRouter;