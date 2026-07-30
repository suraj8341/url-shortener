const express = require("express");
const { nanoid } = require("nanoid");

const app = express();
const PORT = 3000;

app.use(express.json());

const urlDatabase = {};

// -------------------------
// Home Route
// -------------------------
app.get("/", (req, res) => {
    res.send("🚀 URL Shortener API is running!");
});

// -------------------------
// Create Short URL
// -------------------------
app.post("/shorten", (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({
            error: "URL is required"
        });
    }

    const shortCode = nanoid(6);

    urlDatabase[shortCode] = url;

    res.json({
        originalUrl: url,
        shortUrl: `http://localhost:${PORT}/${shortCode}`
    });
});

// -------------------------
// ⭐ ADD THIS HERE ⭐
// Redirect Route
// -------------------------
app.get("/:shortCode", (req, res) => {
    const { shortCode } = req.params;

    const originalUrl = urlDatabase[shortCode];

    if (!originalUrl) {
        return res.status(404).json({
            error: "Short URL not found"
        });
    }

    res.redirect(originalUrl);
});

// -------------------------
// Start Server
// -------------------------
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});