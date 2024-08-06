import { Classroom, Product } from "../schema/model.js";

export const createClassroomController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Classroom.create(data);

    res.json({
      success: true,
      message: "classroom enlisted",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readClassroomController = async (req, res, next) => {
  try {
    let result = await Classroom.find({});
    res.json({
      success: true,
      message: "classroom read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificClassroomController = async (req, res, nex) => {
  try {
    let result = await Classroom.findById(req.params.id);
    res.json({
      success: true,
      message: "classroom specific read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const updateClassroomController = async (req, res, next) => {
  try {
    let result = await Classroom.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "classroom update successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteClassroomController = async (req, res, next) => {
  try {
    let result = await Classroom.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Classroom deleted succesfuuly",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
