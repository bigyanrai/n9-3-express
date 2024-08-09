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

export const login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let user = await WebUser.findOne({ email: email });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    if (!user.isVerifiedEmail) {
      throw new Error("Email is not verified");
    }

    //compare postman password with database hash password
    let isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid credentials");
    }

    let infoObj = {
      id: user.id,
    };

    let expiryInfo = {
      expiresIn: "100d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    res.status(200).json({
      success: true,
      message: "User Login successful",
      user: user,
      token: token,
    });
  } catch (error) {
    res.json({
      sucess: false,
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

export const myProfile = async (req, res, next) => {
  try {
    let id = req._id;
    let result = await WebUser.findById(id);
    res.status(200).json({
      success: true,
      message: "web user profile read successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    let _id = req._id;
    let data = req.body;
    delete data.email;
    delete data.password;
    console.log(req);
    let result = await WebUser.findByIdAndUpdate(_id, data, { new: true });
    res.status(200).json({
      success: true,
      message: "webUser profile updated successfuuly",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updatePassword = async (req, res, next) => {
  try {
    let id = req._id;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;

    let data = await WebUser.findById(id);

    let hashedPassword = data.password;

    let isValidPassword = await bcrypt.compare(oldPassword, hashedPassword);

    if (isValidPassword) {
      let newHashedPassword = await bcrypt.hash(newPassword, 10);
      let result = await WebUser.findByIdAndUpdate(
        id,
        { password: newHashedPassword },
        { new: true }
      );
      res.json({
        success: true,
        message: "Password updated successfully",
        result: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const fortgotPassword = async (req, res, next) => {
  try {
    let email = req.body.email;
    let result = await WebUser.findOne({ email: email });

    if (result) {
      let infoObj = {
        id: result.id,
      };

      let expiryInfo = {
        expiresIn: "1d",
      };
      let token = await jwt.sign(infoObj, secretKey, expiryInfo);
      await sendEmail({
        to: email,
        subject: "Reset Password",
        html: `<h1>Please click on this link to reset password</h1>
        <a href="http://localhost:3000/reset-password?token=${token}">href="http://localhost:3000/reset-password?token=${token}</a>`,
      });

      res.status(200).json({
        success: true,
        message: "password reset link has been created",
        token: token,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "password reset link has not  been created",
    });
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let result = await WebUser.findByIdAndUpdate(
      req._id,
      {
        password: hashedPassword,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
