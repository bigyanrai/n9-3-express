import { Router } from "express";
import {
  createBookController,
  deleteBookController,
  readAllBookController,
  readSpecificBookController,
  updateBookController,
} from "../controller/bookController.js";

let bookRouter = Router();

bookRouter.route("/").post(createBookController).get(readAllBookController);

bookRouter
  .route("/:id")
  .get(readSpecificBookController)
  .patch(updateBookController)
  .delete(deleteBookController);

export default bookRouter;
