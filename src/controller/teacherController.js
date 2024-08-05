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
