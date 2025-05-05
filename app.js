const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello Express</h1>');
});

// CRUD
app.get('/posts', (req, res) => {});
app.get('/posts/:id', (req, res) => {});
app.post('/posts', (req, res) => {});
app.patch('/posts/:id', (req, res) => {});
app.delete('/posts/:id', (req, res) => {});

app.get('/posts/:id/posts/256', (req, res) => {});

module.exports = app;
