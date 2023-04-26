import { DataSource } from 'typeorm';
import { Request, Response } from 'express';
import { Message } from '@models/Message';
import { User } from '@models/User';

const getAll = async (req: Request, res: Response) => {
    const db: DataSource = req.app.get('db');

    const allMessages = await db.manager.find(Message);
    res.json(allMessages.reverse());
};

const save = async (req: Request, res: Response) => {
    const db: DataSource = req.app.get('db');
    const { userId, text } = req.body;

    const user = await db.manager.findOneBy(User, { id: userId });

    const message = new Message();
    message.text = text;
    message.user = user;
    message.createdAt = new Date();

    const newMessage = await db.manager.save(message);
    res.json(newMessage);
};

export {
    getAll,
    save
};
