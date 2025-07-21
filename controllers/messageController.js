const {
  getAllMessages,
  addToMessages,
  getMessageId,
} = require("../db/queries");

async function getMessageGet(req, res) {
  const messages = await getAllMessages();
  res.render("index", { title: "Mini Message Board", messages: messages });
}

function getAddNewFormGet(req, res) {
  res.render("form");
}

async function createNewMessagePost(req, res) {
  const userName = req.body.user;
  const textMessage = req.body.text;
  await addToMessages(userName, textMessage, new Date().toLocaleString());
  res.redirect("/");
}

async function getMessageDetailsGet(req, res) {
  const message = await getMessageId(req.query.id);
  console.log(message);
  res.render("details", { message: message });
}

module.exports = {
  getMessageGet,
  getAddNewFormGet,
  createNewMessagePost,
  getMessageDetailsGet,
};
