import { Request, Response } from 'express';

enum HEALTH_STATUS {
    'RUNNING' = 'RUNNING',
    'STOPPED' = 'STOPPED',
    'FAILING' = 'FAILING',
};

const healthCheck = async (req: Request, res: Response) => {
    res.json({ status: HEALTH_STATUS.RUNNING });
};

export {
    healthCheck
};
