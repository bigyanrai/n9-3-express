import { Router } from "express";
import {
  createWebuserController,
  deleteWebUserController,
  login,
  readAllWebUserController,
  readSpecificWebUserController,
  updateWebUserController,
  verifyEmail,
} from "../controller/webUserController.js";

let webUserRouter = Router();

//need to import the controller
webUserRouter.route("/").post(createWebuserController);
webUserRouter.route("/").get(readAllWebUserController);
webUserRouter.route("/verify-email").post(verifyEmail);
webUserRouter.route("/login").post(login);
webUserRouter.route("/:id").get(readSpecificWebUserController);
webUserRouter.route("/:id").patch(updateWebUserController);
webUserRouter.route("/:id").delete(deleteWebUserController);

export default webUserRouter;
