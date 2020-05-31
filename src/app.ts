import express = require('express')

// Express app configuration
const app = express()

app.set("port", process.env.PORT || 3000)

// Endpoints
app.get("/", (req, res) => {
    res.send("Hello");
});

// export app
export default app;