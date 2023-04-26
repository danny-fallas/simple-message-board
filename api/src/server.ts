import express from 'express';
import { DataSource } from 'typeorm';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import v1Router from '@routes/index';

const createServer = (db: DataSource) => {
    const app = express();
    const corsOptions = { origin: '*' };

    // Set app variables
    app.set('db', db);

    // Use Middlewares
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(morgan('common'));

    // Use Routers
    app.use('/v1', v1Router);
    // Generic 404
    app.use('*', (req, res) => res.send(404));

    // Listeners
    app.listen(4200, () => console.info(`API server listening on port: 4200`));

    return app;
};


export { createServer };
