import { Router } from "express";
import {
  createTraineeController,
  deleteTraineeController,
  readAllTraineeController,
  readSpecificTraineeController,
  updateTraineeController,
} from "../controller/traineeController.js";

let traineeRouter = Router();

traineeRouter
  .route("/")
  .post(createTraineeController)
  .get(readAllTraineeController);

traineeRouter
  .route("/:id")
  .get(readSpecificTraineeController)
  .patch(updateTraineeController)
  .delete(deleteTraineeController);

export default traineeRouter;
