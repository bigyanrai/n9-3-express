import { User } from "../schema/model.js";

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
