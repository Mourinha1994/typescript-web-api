"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Express app configuration
const app = express();
app.set("port", process.env.PORT || 3000);
// Endpoints
app.get("/", (req, res) => {
    res.send("Hello");
});
// export app
exports.default = app;
//# sourceMappingURL=app.js.map