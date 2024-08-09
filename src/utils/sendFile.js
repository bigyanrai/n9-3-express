//Before we working with multer we always have to make public folder(it is the common error/mistake that beginner class)

//The maximum file size in bytes
//1 KB ==1024 byte

import multer from "multer";
import path from "path";

let limits = {
  fileSize: 1024 * 1024 * 2,
};

let storage = multer.diskStorage(
  //destination give the folder location where file is located
  {
    //you must make public folder manually or it will throw error like no such file path or direcgtory

    destination: (req, file, cb) => {
      let staticFolder = "./public";
      cb(null, staticFolder);
    },
    filename: (req, file, cb) => {
      //any file has key and value
      //key is called fieldName and value is called original name

      //fileName gives the title/name of the file
      let fileName = Date.now() + "-" + file.originalname;
      cb(null, fileName);
    },
  }
);

let fileFilter = (req, file, cb) => {
  let validExtensions = [
    ".png",
    ".PNG",
    ".jpeg",
    ".JPEG",
    ".jpg",
    ".JPG",
    ".pdf",
    ".PDF",
    ".mp4",
    ".svg",
    ".doc",
    ".docx",
  ];

  let originalName = file.originalname;
  let originalExtension = path.extname(originalName);

  let isValidExtension = validExtensions.includes(originalExtension);

  //if isValidExtension is true means pass such type of file
  //null represent error since there is no error thus error is null
  if (isValidExtension) cb(null, true);
  //false means don't pass such type of file
  else cb(new Error("FILE IS NOT SUPPORTED"));
};

const upload = multer({
  //storage define the loaction in the server where the file is store and control the filename
  storage: storage,

  //filter the file according to the extension
  fileFilter: fileFilter,

  //filter the file according to the size
  limits: limits,
});

export default upload;
