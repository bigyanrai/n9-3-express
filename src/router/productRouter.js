import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  readAllProductController,
  readSpecificProductController,
  updateProductController,
} from "../controller/productController.js";

let productRouter = Router();

productRouter.route("/").post(createProductController);
productRouter.route("/").get(readAllProductController);

//dynamic route =>it is always placed at last

productRouter.route("/:id").get(readSpecificProductController);
productRouter.route("/:id").patch(updateProductController);
productRouter.route("/:id").delete(deleteProductController);
export default productRouter;
