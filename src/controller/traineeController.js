import { Trainee } from "../schema/model.js";

export let createTraineeController = async (req, res, next) => {
  try {
    let result = await Trainee.create(req.body);

    res.json({
      success: true,
      message: "trainee created successfully",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllTraineeController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Trainee.find({});
    res.json({
      success: true,
      message: "Trainee read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificTraineeController = async (req, res, nex) => {
  try {
    let result = await Trainee.findById(req.params.id);
    res.json({
      success: true,
      message: "Trainee specific read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTraineeController = async (req, res, next) => {
  try {
    let result = await Trainee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Trainee update successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTraineeController = async (req, res, next) => {
  try {
    let result = await Trainee.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Trainee deleted succesfuuly",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
