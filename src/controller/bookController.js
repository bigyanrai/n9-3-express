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

export const readAllBookController = async (req, res, next) => {
  try {
    let result = await Book.find({});
    res.json({
      success: true,
      message: "read all books",
      //es6 modern object operator
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificBookController = async (req, res, next) => {
  try {
    let result = await Book.findById(req.params.id);
    res.json({
      success: true,
      message: "book read successfull",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBookController = async (req, res, next) => {
  try {
    let result = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "book update successfull",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBookController = async (req, res, next) => {
  try {
    let result = await Book.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Book deleted succesfuuly",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
