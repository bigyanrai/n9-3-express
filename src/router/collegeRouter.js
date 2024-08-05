import { Router } from "express";
import {
  createCollegeController,
  deleteCollegeController,
  readAllcollegeController,
  readSpecificCollegeController,
  updateCollegeController,
} from "../controller/collegeController.js";

let collegeRouter = Router();

collegeRouter.route("/").post(createCollegeController);
collegeRouter.route("/").get(readAllcollegeController);

collegeRouter.route("/:id").get(readSpecificCollegeController);
collegeRouter.route("/:id").patch(updateCollegeController);
collegeRouter.route("/:id").delete(deleteCollegeController);

export default collegeRouter;
