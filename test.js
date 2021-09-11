const bcrypt = require("bcrypt");

let mk = "thai1230";

bcrypt
  .compare(mk, "$2b$10$fb8j5zS.OiJD2gPHJMjQO.2JIH3Zt3kIif9UHesGzX/mIlPJBVgvK")
  .then((data) => {
    console.log(8, data);
  })
  .catch((err) => {
    console.log(11, err);
  });
// bcrypt
//   .hash(mk, 10)
//   .then((data) => {
//     console.log(8, data);
//   })
//   .catch((err) => {
//     console.log(11, err);
//   });
