import { Bike } from "../schema/model.js";

export const createBikeController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Bike.create(data);

    res.json({
      success: true,
      message: "Bike created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllBikeController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Bike.find({});
    res.json({
      success: true,
      message: "Bike read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificBikeController = async (req, res, nex) => {
  try {
    let result = await Bike.findById(req.params.id);
    res.json({
      success: true,
      message: "Bike specific read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBikeController = async (req, res, next) => {
  try {
    let result = await Bike.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Bike update successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBikeController = async (req, res, next) => {
  try {
    let result = await Bike.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Bike deleted succesfuuly",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
