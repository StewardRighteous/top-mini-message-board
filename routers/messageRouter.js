const { Router } = require("express");
const messages = require("../db");

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
    messages.push({
      user: userName,
      text: textMessage,
      added: new Date().toLocaleString(),
    });
    res.redirect("/");
  });

module.exports = messageRouter;
