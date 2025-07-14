const { Router } = require("express");
const messages = require("../db");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

messageRouter.get("/new", (req, res) => {
  res.render("form");
});

module.exports = messageRouter;
