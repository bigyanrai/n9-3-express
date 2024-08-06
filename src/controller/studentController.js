import { Student } from "../schema/model.js";

export const createStudentController = async (req, res, next) => {
  try {
    let result = await Student.create(req.body);
    res.json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllStudentController = async (req, res, next) => {
  try {
    let result = await Student.find({});
    res.json({
      success: true,
      message: "student read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificStudentController = async (req, res, nex) => {
  try {
    let result = await Student.findById(req.params.id);
    res.json({
      success: true,
      message: "Student specific read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStudentController = async (req, res, next) => {
  try {
    let result = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Student update successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteStudentController = async (req, res, next) => {
  try {
    let result = await Student.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Student deleted succesfuuly",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
