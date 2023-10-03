const express = require("express");
const router = express.Router();
const {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
  clearTodos,
} = require("../controllers/todo.controller");

router.get("/", getTodos);
router.post("/", createTodo);
router.get("/:id", getTodo);
router.patch("/:id", updateTodo);
router.delete("/", clearTodos);
router.delete("/:id", deleteTodo);

module.exports = router;
