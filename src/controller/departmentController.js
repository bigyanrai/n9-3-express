import { Department } from "../schema/model.js";

export const createDepartmentController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Department.create(data);

    res.json({
      success: true,
      message: "department created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllDepartmentController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Department.find({});
    res.json({
      success: true,
      message: "department read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificDepartmentController = async (req, res, next) => {
  console.log(Department.find(req.params.id));
  try {
    let result = await Department.findById(req.params.id);
    res.json({
      success: true,
      message: "department specific read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateDepartmentController = async (req, res, next) => {
  try {
    let data = req.body;
    ``;
    console.log(data);
    let result = await Department.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // console.log(result);
    res.status(200).json({
      success: true,
      message: "department update successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteDepartmentController = async (req, res, next) => {
  try {
    let result = await Department.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Department deleted succesfuuly",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
