import { Router } from "express";
import {
  createWebuserController,
  deleteWebUserController,
  fortgotPassword,
  login,
  myProfile,
  readAllWebUserController,
  readSpecificWebUserController,
  resetPassword,
  updatePassword,
  updateProfile,
  updateWebUserController,
  verifyEmail,
} from "../controller/webUserController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { isAuthorization } from "../middleware/isAuthorization.js";
// import { isAuthenticated } from "../middleware/isAuthenticated.js";

let webUserRouter = Router();

//need to import the controller
webUserRouter
  .route("/")
  .post(createWebuserController)
  .get(
    isAuthenticated,
    isAuthorization(["superAdmin"]),
    readAllWebUserController
  );

webUserRouter.route("/verify-email").post(verifyEmail);
webUserRouter.route("/login").post(login);

webUserRouter.route("/my-profile").get(isAuthenticated, myProfile);
webUserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);
webUserRouter.route("/update-password").patch(isAuthenticated, updatePassword);
webUserRouter.route("/forgot-password").post(fortgotPassword);
webUserRouter.route("/reset-password").post(isAuthenticated, resetPassword);

webUserRouter
  .route("/:id")
  .get(
    isAuthenticated,
    isAuthorization(["superAdmin"]),
    readSpecificWebUserController
  );
webUserRouter
  .route("/:id")
  .patch(isAuthenticated, isAuthorization, updateWebUserController);
webUserRouter
  .route("/:id")
  .delete(
    isAuthenticated,
    isAuthorization(["superAdmin"]),
    deleteWebUserController
  );
export default webUserRouter;
