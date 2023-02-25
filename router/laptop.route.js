const express = require("express")

const {laptopData, watchData, applianceData, soundbarData, televisionData, televisionDelete} =require("../controller/laptop.controller")

const {telivisionPostData, appliancePostData, soundbarPostData, watchPostData, laptopPostData} = require('../controller/post.controller')

const app = express.Router();


app.get("/laptop", laptopData)

// watch

app.get("/watch", watchData)

// appliance

app.get("/appliance", applianceData)

// soundbar

app.get("/soundbar", soundbarData)

//television

app.get("/telivision", televisionData)


app.post("/laptop", laptopPostData)

app.post("/watch", watchPostData)

app.post("/appliance", appliancePostData)

app.post("/soundbar", soundbarPostData)

app.post("/telivision", telivisionPostData)

// login signup
const {
  signup,
  login
} = require("../controller/user.controller");

app.post("/register", signup);
app.post("/login", login);

//delete

app.delete("/telivision/:id", televisionDelete)

module.exports = app