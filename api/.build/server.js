"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
// import { PORT, ENABLE_SSL, OTEL_METRICS_EXPORTER } from '@utils/env';
const index_1 = __importDefault(require("@routes/index"));
const createServer = (db) => {
    const app = (0, express_1.default)();
    const corsOptions = { origin: '*' };
    // Set app variables
    app.set('db', db);
    // Use Middlewares
    app.use((0, cors_1.default)(corsOptions));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, morgan_1.default)('common'));
    // Use Routers
    app.use('/v1', index_1.default);
    // Generic 404
    app.use('*', (req, res) => res.send(404));
    // Listeners
    app.listen(4200, () => console.info(`API server listening on port: 4200`));
    return app;
};
exports.createServer = createServer;
