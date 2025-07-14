const { Router } = require("express");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("index");
});

messageRouter.get("/new", (req, res) => {
  res.send("New Message Page");
});

module.exports = messageRouter;
