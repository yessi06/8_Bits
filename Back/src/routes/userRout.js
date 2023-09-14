const { Router } = require('express');
const { createUser, getUsers, loginUser, logOutUser } = require('../handlers/userHandler');


const userRouter = Router();


userRouter.post('/login', loginUser);
userRouter.get('/', getUsers);
userRouter.post('/signup', createUser);
userRouter.get('/logout', logOutUser);

module.exports = userRouter;