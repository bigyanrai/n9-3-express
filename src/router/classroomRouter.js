import { Router } from "express";
import {
  createClassroomController,
  deleteClassroomController,
  readClassroomController,
  readSpecificClassroomController,
  updateClassroomController,
} from "../controller/classroomController.js";

let classroomRouter = Router();

classroomRouter.route("/").post(createClassroomController);
classroomRouter.route("/").get(readClassroomController);

classroomRouter
  .route("/:id")
  .get(readSpecificClassroomController)
  .patch(updateClassroomController)
  .delete(deleteClassroomController);

export default classroomRouter;
