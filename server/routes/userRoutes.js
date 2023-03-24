import express from 'express';

import { signin, signout, signup, userInfo } from '../controllers/userController.js';
import { requireSignin } from '../middlewares/index.js';
import { isRequestValidated, validateSigninRequest, validateSignupRequest } from '../validators/auth.js';

const userRouter = express.Router();

userRouter.post('/signup', validateSignupRequest, isRequestValidated, signup);
userRouter.post('/signin', validateSigninRequest, isRequestValidated, signin);
userRouter.post('/signout', signout);
userRouter.get('/details/:id', requireSignin ,userInfo);

export default userRouter;