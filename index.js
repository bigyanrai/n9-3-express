//make epress application
import express, { json } from "express";
import connectDB from "./src/ConnectDatabase/connectMongo.js";
import userRouter from "./src/router/userRouter.js";
import productRouter from "./src/router/productRouter.js";
import teacherRouter from "./src/router/teacherRouter.js";
import bookRouter from "./src/router/bookRouter.js";
import classroomRouter from "./src/router/classroomRouter.js";
import webUserRouter from "./src/router/webUserRouter.js";
import collegeRouter from "./src/router/collegeRouter.js";
const myApp = express();

const port = 3000;

myApp.use(json()); //read json data

connectDB();

myApp.use("/user", userRouter);
myApp.use("/product", productRouter);
myApp.use("/teacher", teacherRouter);
myApp.use("/classroom", classroomRouter);
myApp.use("/book", bookRouter);
myApp.use("/web-user", webUserRouter);

myApp.use("/college", collegeRouter);

// myApp.get("/home", (req, res) => {

//   res.send("get home");
// });

// console.log("hello");

myApp.listen(port, () => {
  console.log(`Express is running at ${port}`);
});
