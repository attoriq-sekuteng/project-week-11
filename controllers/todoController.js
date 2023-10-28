const { Todo } = require('../models');

const listTodos = async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
};

const detailTodo = async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

const createTodo = async (req, res) => {
  const { title } = req.body;
  const todo = await Todo.create({ title });
  res.json(todo);
};

const deleteTodo = async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (todo) {
    await todo.update({ deleted: true });
    res.json({ message: 'Todo deleted' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

module.exports = {
  listTodos,
  detailTodo,
  createTodo,
  deleteTodo,
};
