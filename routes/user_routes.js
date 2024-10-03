// import express' router, crucial
import { Router } from "express";
import { register,login,logout } from "../controllers/user_controllers.js";


// create my router
const userRouter = Router();

// define my routes
userRouter.post('/users/register', register);
userRouter.post('/users/register', login);
userRouter.post('/users/logout', logout);

export default userRouter;