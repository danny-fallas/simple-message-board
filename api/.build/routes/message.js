"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const message_1 = require("@controllers/message");
const express_2 = require("@utils/express");
const router = express_1.default.Router();
router.get('/all', (0, express_2.runAsync)(message_1.getAll));
router.post('/save', (0, express_2.runAsync)(message_1.save));
exports.default = router;
