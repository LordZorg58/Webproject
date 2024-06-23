const mongoose = require("mongoose");

function connectToMongoDB() {
  mongoose
    .connect(process.env.MONGODB_URI, { //al url fal env 3ashn yab2a fii security
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
}

module.exports = { connectToMongoDB };
