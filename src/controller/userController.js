import { Department, User } from "../schema/model.js";

export const createUserController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await User.create(data);

    res.json({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllUserController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await User.find({});
    res.json({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificUserController = async (req, res, next) => {
  try {
    let result = await User.findById(req.params.id);
    res.json({
      success: true,
      message: "Specific User read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUserController = async (req, res, next) => {
  try {
    let result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Specific User updated successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUserController = async (req, res, next) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: " User deleted successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
