import mongoose, { mongo } from "mongoose";
import userSchema from "./userSchema.js";
import productSchema from "./productSchema.js";
import { teacherSchema } from "./teacherSchema.js";
import { booksSchema } from "./booksSchema.js";
import { classroomSchema } from "./classroomSchema.js";
import webUserSchema from "./webUserSchema.js";
import { collegeSchema } from "./collegeSchema.js";
import { departmentSchema } from "./departmentSchema.js";
import { studentSchema } from "./studentSchema.js";
import { traineeSchema } from "./traineeSchema.js";
import { bikeSchema } from "./bikeSchema.js";

export const User = mongoose.model("user", userSchema);

export const Product = mongoose.model("Product", productSchema);

export const Teacher = mongoose.model("teacher", teacherSchema);

export const Book = mongoose.model("book", booksSchema);

export const Classroom = mongoose.model("classroom", classroomSchema);

export const WebUser = mongoose.model("webuser", webUserSchema);

export const College = mongoose.model("college", collegeSchema);

export const Department = mongoose.model("department", departmentSchema);

export const Student = mongoose.model("student", studentSchema);

export const Trainnee = mongoose.model("trainee", traineeSchema);

export const Bike = mongoose.model("bike", bikeSchema);
