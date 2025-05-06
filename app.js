const express = require('express');

const { contactsController } = require('./controllers');

const app = express();

// Middleware to parse json to js-object
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello Express</h1>');
});

// CRUD
app.get('/contacts', contactsController.getContacts);

app.post('/contacts', contactsController.createContact);

// GET localhost:5000/contacts/10?resutls=10&page=5
// :id - параметр маршрута
// ?results=10&page=5 - параметри рядка запиту

app.get('/contacts/:id', (req, res) => {
  const {
    params: { id },
    query: { results, page },
  } = req;
  m;
  console.log('req.params :>> ', req.params);
  console.log('req.query :>> ', req.query);
  res.status(200).send('OK');
  // const contactsById = ContactDB.getContactById(id);
  // res.status(200).send(contactsById)
});

// звернутися до всіх замовлень певного користувача, зокрема до виконаних (від загального до конкретного)
// users/5/orders?isDone=true
// прописати обробник, в якому витягти id користувача і дані для фільтру замовлень

app.get('/users/:id/orders', (req, res) => {
  const {
    params: { id },
    query: { isDone },
  } = req;

  console.log('id, isDone :>> ', id, isDone);
  res.status(200).send('OK!');
});

app.patch('/contacts/:id', (req, res) => {});
app.delete('/contacts/:id', (req, res) => {});

module.exports = app;
