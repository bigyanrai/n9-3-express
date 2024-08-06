import { Teacher } from "../schema/model.js";

export const createTeacherController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Teacher.create(data);

    res.json({
      success: true,
      message: "Teacher created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      messgae: error.message,
    });
  }
};

export const readAllTeacherController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Teacher.find({});
    res.json({
      success: true,
      message: "teacher read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificTeacherController = async (req, res, nex) => {
  try {
    let result = await Teacher.findById(req.params.id);
    res.json({
      success: true,
      message: "teacher specific read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTeacherController = async (req, res, next) => {
  try {
    let result = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "teacher update successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTeacherController = async (req, res, next) => {
  try {
    let result = await Teacher.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "teacher deleted succesfuuly",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
