"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = void 0;
var HEALTH_STATUS;
(function (HEALTH_STATUS) {
    HEALTH_STATUS["RUNNING"] = "RUNNING";
    HEALTH_STATUS["STOPPED"] = "STOPPED";
    HEALTH_STATUS["FAILING"] = "FAILING";
})(HEALTH_STATUS || (HEALTH_STATUS = {}));
;
const healthCheck = async (req, res) => {
    res.json({ status: HEALTH_STATUS.RUNNING });
};
exports.healthCheck = healthCheck;
