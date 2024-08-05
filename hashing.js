import bcrypt from "bcrypt";

//generate hash code
let password = "bigyan";
let hashedpassword = await bcrypt.hash(password, 10);
console.log(hashedpassword);

//compare hash code, compare always gives boolean
let loginPassword = "bigyan";
let isValidPassword = await bcrypt.compare(loginPassword, hashedpassword);
console.log(isValidPassword);
