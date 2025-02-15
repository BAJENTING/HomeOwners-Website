const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files (HTML, CSS, JS)

let reservations = {}; // Simulated database

// Serve the HTML page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

// Handle reservation check
app.post("/check-availability", (req, res) => {
    let { facility, date } = req.body;

    if (!facility || !date) {
        return res.status(400).json({ error: "Facility and date are required." });
    }

    if (reservations[facility] && reservations[facility][date]) {
        res.json({ available: false });
    } else {
        if (!reservations[facility]) {
            reservations[facility] = {};
        }
        reservations[facility][date] = true; // Mark as reserved
        res.json({ available: true });
    }
});

// Start the server
app.listen(3000, () => console.log("Server running on http://127.0.0.1:3000"));
