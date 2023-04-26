'use strict';
import 'reflect-metadata';
import './server';
import { Database } from './utils/data-source';
import { createServer } from './server';

Database.initialize()
    .then((db) => createServer(db))
    .catch(error => console.log(error));
