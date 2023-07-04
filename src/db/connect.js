const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ecomsiteRegistration", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connnection successfull");
  })
  .catch((e) => {
    console.log("no connection");
  });
