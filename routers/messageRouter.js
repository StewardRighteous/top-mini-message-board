const { Router } = require("express");
const { messages, addToMessages, getMessage } = require("../db");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

messageRouter
  .route("/new")
  .get((req, res) => {
    res.render("form");
  })
  .post((req, res) => {
    const userName = req.body.user;
    const textMessage = req.body.text;
    addToMessages(userName, textMessage, new Date().toLocaleString());
    res.redirect("/");
  });

messageRouter.get("/detail{s}", (req, res) => {
  const message = getMessage(req.query.id);
  console.log(message);
  res.render("details", { message: message.at(0) });
});

module.exports = messageRouter;
