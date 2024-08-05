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
