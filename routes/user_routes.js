// import express' router, crucial
import { Router } from "express";
import { registerUser,loginUser,logoutUser, updateProfile } from "../controllers/user_controllers.js";
import { userAvatarUpload } from "../middlewares/upload.js";

// create my router
const userRouter = Router();

// define my routes
userRouter.post('/users/register', registerUser);
userRouter.post('/users/register', loginUser);
userRouter.post('/users/logout', logoutUser);
userRouter.post('/users/me', userAvatarUpload.single('avatar'), updateProfile);

export default userRouter;