const express = require("express");
const cors = require("cors");
require("dotenv/config");

const authRoutes = require("./routes/auth.route");
const todoRoutes = require("./routes/todo.route");
const authMiddleware = require("./middlewares/auth.middleware");
const connectDb = require("./db/connectDb");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()).use(express.json());

app.use("/auth", authRoutes);
app.use("/todos", authMiddleware, todoRoutes);

connectDb();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
