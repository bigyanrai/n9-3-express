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
import departmentRouter from "./src/router/departmentRouter.js";
import studentRouter from "./src/router/studentRouter.js";
import traineeRouter from "./src/router/traineeRouter.js";
import bikeRouter from "./src/router/bikeRouter.js";
import fileRouter from "./src/router/fileRouter.js";

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
myApp.use("/department", departmentRouter);
myApp.use("/student", studentRouter);
myApp.use("/trainee", traineeRouter);
myApp.use("/bike", bikeRouter);
myApp.use("/file", fileRouter);

myApp.listen(port, () => {
  console.log(`Express is running at ${port}`);
});
