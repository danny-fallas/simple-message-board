import { DataSource } from 'typeorm';

import { Message } from '@models/Message';
import { User } from '@models/User';

export const Database = new DataSource({
    type: 'sqlite',
    database: './.database/database.sqlite',
    synchronize: true,
    logging: false,
    entities: [User, Message],
    migrations: [],
    subscribers: [],
})
