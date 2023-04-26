"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const typeorm_1 = require("typeorm");
const Message_1 = require("@models/Message");
const User_1 = require("@models/User");
exports.Database = new typeorm_1.DataSource({
    type: 'sqlite',
    database: './.database/database.sqlite',
    synchronize: true,
    logging: false,
    entities: [User_1.User, Message_1.Message],
    migrations: [],
    subscribers: [],
});
