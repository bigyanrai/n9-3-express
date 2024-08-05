import { WebUser } from "../schema/model.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../utils/constant.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendEmail.js";

export const createWebuserController = async (req, res, next) => {
  try {
    let data = req.body;
    let hashedpassword = await bcrypt.hash(data.password, 10);

    data = {
      ...data,
      isVerifiedEmail: false,
      password: hashedpassword,
    };
    let result = await WebUser.create(data);

    let infoObj = {
      id: result._id,
    };

    let expiryInfo = {
      expiresIn: "1d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    //send mail

    await sendEmail({
      to: data.email,
      subject: "Account Registration",
      html: `<h1>Your account has been registered successfuly</h1>
      <a href="http://localhost:3000/verify-email?token=${token}">
      href=http://localhost:3000/verify-email?token=${token}
      <a/>
      `,
    });

    res.json({
      success: true,
      message: "web user created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllWebUserController = async (req, res, next) => {
  try {
    let result = await WebUser.find({});
    res.json({
      success: true,
      message: "webUser read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificWebUserController = async (req, res, nex) => {
  try {
    let result = await WebUser.findById(req.params.id);
    res.json({
      success: true,
      message: "WebUser specific read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateWebUserController = async (req, res, next) => {
  try {
    let result = await WebUser.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json({
      success: true,
      message: "WebUser update successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteWebUserController = async (req, res, next) => {
  try {
    let result = await WebUser.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "WebUser deleted succesfully",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    //get token from postman
    let tokenString = req.headers.authorization;
    console.log(tokenString);
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    let infoObj = await jwt.verify(token, secretKey);
    let userId = infoObj.id;

    let result = await WebUser.findByIdAndUpdate(userId, {
      isVerifiedEmail: true,
    });

    res.json({
      success: true,
      message: "email verified successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};
