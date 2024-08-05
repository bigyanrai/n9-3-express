import { Book } from "../schema/model.js";

export const createBookController = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await Book.create(data);

    res.json({
      success: true,
      message: "Book enlisted",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
