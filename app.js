const express = require("express");
const messageRouter = require("./routers/message");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", messageRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Running...");
});
