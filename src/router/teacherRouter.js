import { Router } from "express";
import {
  createTeacherController,
  deleteTeacherController,
  readAllTeacherController,
  readSpecificTeacherController,
  updateTeacherController,
} from "../controller/teacherController.js";

let teacherRouter = Router();

teacherRouter
  .route("/")
  .post(createTeacherController)
  .get(readAllTeacherController);

teacherRouter
  .route("/:id")
  .get(readSpecificTeacherController)
  .patch(updateTeacherController)
  .delete(deleteTeacherController);

export default teacherRouter;
