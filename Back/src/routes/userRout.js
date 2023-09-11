const { Router } = require('express');
const { createUser, getUsers, loginUser } = require('../handlers/userHandler');


const userRouter = Router();


userRouter.post('/login', loginUser);
userRouter.get('/', getUsers);
userRouter.post('/signup', createUser);

module.exports = userRouter;