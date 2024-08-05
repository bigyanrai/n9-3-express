import { Product } from "../schema/model.js";

export const createProductController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Product.create(data);

    res.json({
      success: true,
      message: "product created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllProductController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Product.find({});
    res.json({
      success: true,
      message: "product read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificProductController = async (req, res, nex) => {
  try {
    let result = await Product.findById(req.params.id);
    res.json({
      success: true,
      message: "product specific read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProductController = async (req, res, next) => {
  try {
    let result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "product update successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProductController = async (req, res, next) => {
  try {
    let result = await Product.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Product deleted succesfuuly",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
