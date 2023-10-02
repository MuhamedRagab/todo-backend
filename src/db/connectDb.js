const { default: mongoose } = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
const connectDb = () => {
  mongoose.connect(MONGO_URI);

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));

  db.once("open", () => {
    console.log("Database connected");
  });
};

module.exports = connectDb;
