import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readAllUserController,
  readSpecificUserController,
  updateUserController,
} from "../controller/userController.js";
let userRouter = Router();

userRouter.route("/").post(createUserController).get(readAllUserController);

userRouter
  .route("/:id")
  .get(readSpecificUserController)
  .patch(updateUserController)
  .delete(deleteUserController);
export default userRouter;
