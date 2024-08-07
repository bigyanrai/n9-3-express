import { Router } from "express";
import {
  createWebuserController,
  deleteWebUserController,
  login,
  myProfile,
  readAllWebUserController,
  readSpecificWebUserController,
  updateProfile,
  updateWebUserController,
  verifyEmail,
} from "../controller/webUserController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
// import { isAuthenticated } from "../middleware/isAuthenticated.js";

let webUserRouter = Router();

//need to import the controller
webUserRouter.route("/").post(createWebuserController);
webUserRouter.route("/").get(readAllWebUserController);
webUserRouter.route("/verify-email").post(verifyEmail);
webUserRouter.route("/login").post(login);

webUserRouter.route("/my-profile").get(isAuthenticated, myProfile);
webUserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);

webUserRouter.route("/:id").get(readSpecificWebUserController);
webUserRouter.route("/:id").patch(updateWebUserController);
webUserRouter.route("/:id").delete(deleteWebUserController);
export default webUserRouter;
