const express = require("express");
const app = express();
const Router = require("./action/UserActions")
const mongoose = require("mongoose");

app.use(express.json());
 
app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

app.use("/user", Router);
 
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

module.exports = app;