"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAsync = void 0;
const runAsync = (fn) => {
    return (req, res, next) => {
        Promise
            .resolve(fn(req, res, next))
            .catch(err => {
            errorHandler(err, req, res);
        });
    };
};
exports.runAsync = runAsync;
const errorHandler = (err, req, res) => {
    const now = Date.now();
    console.error(`${now} ERROR =>`, err.message || err);
    console.error(`${now} REQUEST_BODY =>`, req.body);
    console.error(`${now} STACK_TRACE =>`, err.stack || 'n/a');
    res.status(500).json({ error: err.message || err });
};
