import jwt from "jsonwebtoken";

let infoObj = {
  id: 1234,
};

let secretKey = "tombrady";

let expiryInfo = {
  expiresIn: "1d",
};

let token = jwt.sign(infoObj, secretKey, expiryInfo);

console.log(token);

// to verify a token must be made form given secret key and it should not exeed expiryInfo

try {
  let infoObj = jwt.verify(token, "tombrady");
  console.log(infoObj);
} catch (error) {
  console.log(error.message);
}
