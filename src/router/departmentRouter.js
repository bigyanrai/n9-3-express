import { Router } from "express";
import {
  createDepartmentController,
  deleteDepartmentController,
  readAllDepartmentController,
  readSpecificDepartmentController,
  updateDepartmentController,
} from "../controller/departmentController.js";

let departmentRouter = Router();

departmentRouter
  .route("/")
  .post(createDepartmentController)
  .get(readAllDepartmentController);

departmentRouter
  .route("/:id")
  .get(readSpecificDepartmentController)
  .patch(updateDepartmentController)
  .delete(deleteDepartmentController);

export default departmentRouter;
