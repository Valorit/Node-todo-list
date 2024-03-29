const {
  Router
} = require('express');
const Todo = require('../models/Todo');
const router = Router();

router.get('/', async (req, res) => {
  const todos = await Todo.find({});

  res.render('index', {
    title: 'Todos list',
    todos
  });
});

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo'
  });
});

module.exports = router;