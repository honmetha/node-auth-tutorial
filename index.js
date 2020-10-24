const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const todoLists = JSON.parse(fs.readFileSync('./mocks/todo.json'));

app.get('/todos', (req, res) => {
  res.status(200).send(todoLists);
});

app.post('/todos', (req, res) => {
  const newId = todoLists.length > 0 ? todoLists[todoLists.length - 1].id + 1 : 0;
  const newTodoList = {
    id: newId, task: req.body.task
  };

  todoLists.push(newTodoList);

  fs.writeFileSync('./mocks/todo.json', JSON.stringify(todoLists));
  res.status(201).send({ todo: newTodoList });
});

app.patch('/todos', (req, res) => {
  res.send({ message: 'Patch Method' });
});

app.delete('/todos/:id', (req, res) => {
  const id = +req.params.id;
  const idx = todoLists.findIndex(el => el.id === id);

  if (idx === -1) {
    return res.status(404).send({ message: 'Invalid Id' });
  }

  const newTodoLists = todoLists.filter(el => el.id !== id);
  fs.writeFileSync('./mocks/todo.json', JSON.stringify(newTodoLists));
  res.status(204).send();
});

const port = 8000;
app.listen(port, () => {
  console.log(`server starting on port ${port}`);
});