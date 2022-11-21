const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
const monmodel = require("./model");
const auth = require("./middleware/auth");
const PORT = process.env.PORT;
//DB Connection
mongoose.connect(
  process.env.MONGO_URL,
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

app.post("/user/login", async (req, res) => {
  try {
    const user = await monmodel.findByLoginCredentials(
      req?.body?.email,
      req?.body?.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

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

app.post("/user/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.send();
  } catch (e) {
    console.log(e);
    res.status(500).send();
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

app.get("/user/me", auth, async (req, res) => {
  res.send(req.user);
});

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
