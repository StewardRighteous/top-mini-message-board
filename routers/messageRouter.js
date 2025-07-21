const { Router } = require("express");
const {
  getMessageGet,
  getAddNewFormGet,
  createNewMessagePost,
  getMessageDetailsGet,
} = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", getMessageGet);

messageRouter.route("/new").get(getAddNewFormGet).post(createNewMessagePost);

messageRouter.get("/detail{s}", getMessageDetailsGet);

module.exports = messageRouter;
