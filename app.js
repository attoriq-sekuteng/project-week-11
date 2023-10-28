const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const { Todo } = require('./models');
const todoRoutes = require('./routes/todo');

app.use('/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
