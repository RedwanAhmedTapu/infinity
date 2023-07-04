// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const Register = require("./models/register");
// const app = express();

// require("./db/connect");

// const port = 4000;

// // const static_path = path.join(__dirname, "../public");
// // app.use(express.static(static_path));
// // app.set("view engine", "hbs");
// // console.log(path.join(__dirname, "../public/index.html"));
// app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(cors());
// app.post("/register", (req, res) => {
//   // res.sendFile(path.join(__dirname, "../public/index.html"));
//   // res.render(path.join(__dirname, "../views/pages/express.hbs"));
//   try {
//     const password = req.body.password;
//     const confirmpasssword = req.body.confirmpassword;
//     console.log(password);
//     console.log(confirmpasssword);
//     const registerEmployee = new Register({
//       username: req.body.username,
//       email: req.body.email,
//       phone: req.body.phone,
//       password: req.body.password,
//       // confirmpasssword: req.body.confirmpassword,
//       description: req.body.description,
//     });

//     if (!registerEmployee) {
//       if (password === confirmpasssword) {
//         console.log(registerEmployee);
//         registerEmployee.save();
//         window.location.assign("/login");
//         alert("registration completed");
//         res.send("user created successfully");
//       } else {
//         res.send("passwords are not matching");
//       }
//     } else {
//       alert("user already exist");
//     }
//   } catch (error) {
//     res.status(404).send("error");
//   }
// });

// app.post("/loguser", cors(), (req, res) => {
//   const { email, password } = req.body;
//   Register.findOne({ email: email }, (err, user) => {
//     if (user) {
//       if (password === Register.password && email === Register.email) {
//         window.location.assign("/");
//         alert("logged in successfull");
//         res.send({ message: "login successful", Register: Register });
//       } else {
//         res.send({ message: "password doesn't match " });
//       }
//     } else {
//       res.send("user not registered");
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });
