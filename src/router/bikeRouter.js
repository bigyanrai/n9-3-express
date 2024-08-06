import { Router } from "express";
import {
  deleteBikeController,
  createBikeController,
  readAllBikeController,
  readSpecificBikeController,
  updateBikeController,
} from "../controller/bikeController.js";

let bikeRouter = Router();
bikeRouter.route("/").post(createBikeController).get(readAllBikeController);

bikeRouter
  .route("/:id")
  .get(readSpecificBikeController)
  .patch(updateBikeController)
  .delete(deleteBikeController);

export default bikeRouter;
