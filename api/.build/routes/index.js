"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("@controllers/index");
const message_1 = __importDefault(require("@routes/message"));
const user_1 = __importDefault(require("@routes/user"));
const router = express_1.default.Router();
router.get('/health-check', index_1.healthCheck);
router.use('/message', message_1.default);
router.use('/user', user_1.default);
exports.default = router;
