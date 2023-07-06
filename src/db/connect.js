const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://redwantapu1234:<password>@cluster0.y2wf7zz.mongodb.net/ecomsiteRegistration",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connnection successfull");
  })
  .catch((e) => {
    console.log("no connection");
  });
