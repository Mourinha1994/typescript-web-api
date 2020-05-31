"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awesome = exports.hello = exports.hi = void 0;
exports.hi = (req, res) => {
    res.send('Hi!! :) ');
};
exports.hello = (req, res) => {
    res.send("How's it going?");
};
exports.awesome = (req, res) => {
    res.send("EVERYTHING IS AWESOME!!!");
};
//# sourceMappingURL=status.js.map