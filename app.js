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

app.get('/contacts/:id', contactsController.getContactById);

app.patch('/contacts/:id', contactsController.updateContactById);

app.delete('/contacts/:id', contactsController.deleteContact);

module.exports = app;
