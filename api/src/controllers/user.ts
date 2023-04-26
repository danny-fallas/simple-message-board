import { Request, Response } from 'express';
import { DataSource } from 'typeorm';
import { User } from '@models/User';


const create = async (req: Request, res: Response) => {
    const db: DataSource = req.app.get('db');
    const { fullName } = req.body;

    const user = new User();
    user.fullName = fullName || 'No Name';
    user.createdAt = new Date();

    await db.manager.save(user);
    res.json(user);
};

export {
    create
};
