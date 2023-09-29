const { Router } = require('express');
const { createUser, getUsers, loginUser, logOutUser, getUserById, updateUser, filterUserByNameOrEmail, userResetPasswordHandler} = require('../handlers/userHandler');
const {validateCreateUser} = require('../middleware/validate')

const userRouter = Router();

userRouter.post('/login', loginUser);
userRouter.get('/', getUsers);
userRouter.post('/signup', validateCreateUser, createUser);
userRouter.get('/logout', logOutUser);
userRouter.get('/filter', filterUserByNameOrEmail);
userRouter.get('/:id', getUserById);
userRouter.put('/update/:id', updateUser);
userRouter.post('/resetPassword/:token', userResetPasswordHandler )

module.exports = userRouter;