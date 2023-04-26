"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = exports.getAll = void 0;
const Message_1 = require("@models/Message");
const User_1 = require("@models/User");
const getAll = async (req, res) => {
    const db = req.app.get('db');
    const allMessages = await db.manager.find(Message_1.Message);
    res.json(allMessages.reverse());
};
exports.getAll = getAll;
const save = async (req, res) => {
    const db = req.app.get('db');
    const { userId, text } = req.body;
    const user = await db.manager.findOneBy(User_1.User, { id: userId });
    const message = new Message_1.Message();
    message.text = text;
    message.user = user;
    message.createdAt = new Date();
    const newMessage = await db.manager.save(message);
    res.json(newMessage);
};
exports.save = save;
