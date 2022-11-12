const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const monmodel = require("./model");

//DB Connection
mongoose.connect(
  "mongodb://0.0.0.0:27017/mynewdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("connected to db");
    } else {
      console.log("Error connecting to db");
    }
  }
);



//Post Request

app.post("/user/create", async (req, res) => {
  try {
    console.log("inside post function");
    const data = new monmodel({
      fullname: req?.body?.fullname,
      email: req?.body?.email,
      password: req?.body?.password,
    });
    const val = await data.save();
    res.send({ userData: val, message: "User Data Saved succesfully!!" });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// PUT

app.put("/user/edit", async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const user = await monmodel.findByCredentials(req?.body?.email);
    updates.forEach((update) => {
      if (update != "email") {
        user[update] = req.body[update];
      }
    });
    const newUser = await user.save();
    res.send({ userData: newUser, message: "User Data Updated succesfully!!" });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
//GET ALL

app.get("/user/getAll", (req, res) => {
  monmodel.find({}, { _id: 0, email: 1, password: 1 }, (err, val) => {
    if (!err) {
      res.json(val);
    } else {
      res.send("Error in establishing FETCH Request");
    }
  });
});

//DELETE
app.delete("/user/delete", async function (req, res) {
  try {
    let email = req?.body?.email;
    if (!email) {
      return res.status(400).send({ mesage: "Email empty" });
    }
    const user = await monmodel.findOneAndDelete({ email });
    if (!user) {
      return res.send({ message: "No user found" });
    }
    res.send({ user, message: "User Data Deleted succesfully!!" });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.listen(3000, () => {
  console.log("on port 3000");
});
