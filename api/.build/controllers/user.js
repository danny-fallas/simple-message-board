"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const User_1 = require("@models/User");
const create = async (req, res) => {
    const db = req.app.get('db');
    const { fullName } = req.body;
    const user = new User_1.User();
    user.fullName = fullName || 'No Name';
    user.createdAt = new Date();
    await db.manager.save(user);
    res.json(user);
};
exports.create = create;
