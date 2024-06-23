const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: true,
  },
  chatId:{
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

//creating model awl 7aga 2asm al model tany 7aga al schema aly 3amalnaha
const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;