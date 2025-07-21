const express = require("express");
const messageRouter = require("./routers/messageRouter");
const path = require("path");
require("dotenv").config();

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", messageRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Running...");
});
