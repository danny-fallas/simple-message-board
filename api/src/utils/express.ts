import { NextFunction, Request, Response } from "express";

const runAsync = (fn: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise
            .resolve(fn(req, res, next))
            .catch(err => {
                errorHandler(err, req, res);
            });
    };
};

const errorHandler = (err: any, req: Request, res: Response) => {
    const now = Date.now();
    console.error(`${now} ERROR =>`, err.message || err);
    console.error(`${now} REQUEST_BODY =>`, req.body);
    console.error(`${now} STACK_TRACE =>`, err.stack || 'n/a');
    res.status(500).json({ error: err.message || err });
};

export {
    runAsync
};