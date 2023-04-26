'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./server");
const data_source_1 = require("./utils/data-source");
const server_1 = require("./server");
data_source_1.Database.initialize()
    .then((db) => (0, server_1.createServer)(db))
    .catch(error => console.log(error));
