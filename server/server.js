const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", require("./routes/userRoutes"));

// connect DB & run server
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => {
    app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
  })
  .catch((err) => console.error("❌ DB error:", err));
