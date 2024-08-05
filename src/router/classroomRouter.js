import { Router } from "express";
import {
  createClassroomController,
  readClassroomController,
} from "../controller/classroomController.js";

let classroomRouter = Router();

classroomRouter.route("/").post(createClassroomController);
classroomRouter.route("/").get(readClassroomController);

export default classroomRouter;
