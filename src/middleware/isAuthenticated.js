//get token from postman
import jwt from "jsonwebtoken";
import { secretKey } from "../utils/constant.js";
const isAuthenticated = async (req, res, next) => {
  try {
    //get token from postman
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    // verify token
    let user = await jwt.verify(token, secretKey);

    //ERROR COULD BE HERE
    req._id = user.id;
    console.log(user);
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "token not valid",
    });
  }
};

export default isAuthenticated;
