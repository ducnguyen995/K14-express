const jwt = require("jsonwebtoken");

// const token = jwt.sign({ id: "321654687654654" }, "thai123", { expiresIn: 60 });
// console.log(token);
let string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMyMTY1NDY4NzY1NDY1NCIsImlhdCI6MTYzMTE5MDYxOSwiZXhwIjoxNjMxMTkwNjc5fQ.TDg15R6VQXSZxztfOr-tbDvSf9nmz3ftYrSaj3dw7-8";

const data = jwt.verify(string, "thai123");
console.log(data);
