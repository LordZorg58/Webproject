const Chat = require('../models/Chat'); 

const getChats = async (req, res) => {
  try {
    const chats = await Chat.find(); 
    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createChat = async (req, res) => {
  const { msg, chatId, user } = req.body;

  if (!msg || !chatId || !user) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newChat = new Chat({
      msg,
      chatId,
      user,
    });

    const savedChat = await newChat.save();
    res.status(201).json(savedChat);
  } catch (err) {
    if (err.code === 11000) {
      // Handle duplicate key error
      return res.status(400).json({ error: 'Chat ID already exists' });
    }
    res.status(500).json({ error: err.message });
  }
};

const addMessageToChat = async (req, res) => {
  const { chatId, msg } = req.body;

  if (!msg || !chatId) {
    return res.status(400).json({ error: 'Chat ID and message are required' });
  }

  try {
    const chat = await Chat.findOne({ chatId });

    if (!chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    chat.msg = `${chat.msg}\n${msg}`;
    const updatedChat = await chat.save();

    res.status(200).json(updatedChat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getChats,
  createChat,
  addMessageToChat,
};

  
  
  