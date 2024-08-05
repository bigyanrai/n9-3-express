import nodemailer from "nodemailer";
// const nodemailer = require("nodmailer");

let transporterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  //user and password must be gniuine
  auth: {
    user: "anishadk96@gmail.com",
    pass: "fmvs txwx wmzc igzb",
  },
};

export let sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occured", error.message);
  }
};
