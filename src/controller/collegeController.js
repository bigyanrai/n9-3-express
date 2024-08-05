import { College } from "../schema/model.js";

export const createCollegeController = async (req, res, next) => {
  try {
    let data = req.body;
    console.log(data);
    let result = await College.create(data);
    res.json({ success: true, message: "college created", data: result });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readAllcollegeController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await College.find({});
    res.json({
      success: true,
      message: "college read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificCollegeController = async (req, res, nex) => {
  try {
    let result = await College.findById(req.params.id);
    res.json({
      success: true,
      message: "college specific read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCollegeController = async (req, res, next) => {
  try {
    let result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "college update successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCollegeController = async (req, res, next) => {
  try {
    let result = await Product.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "College deleted succesfuuly",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
