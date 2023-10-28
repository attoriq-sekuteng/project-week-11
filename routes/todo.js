const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');


router.get('/', todoController.listTodos);
router.get('/:id', todoController.detailTodo);
router.post('/', todoController.createTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
