const express = require('express');

const { contactsController } = require('./controllers');
const { validate, errorHandlers } = require('./middleware');

const app = express();

// Middleware to parse json to js-object
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello Express</h1>');
});

// CRUD
app.get('/contacts', contactsController.getContacts);

app.post(
  '/contacts',
  validate.validateContactOnCreate,
  contactsController.createContact
);

app.get('/contacts/:id', contactsController.getContactById);

app.patch(
  '/contacts/:id',
  validate.validateContactOnUpdate,
  contactsController.updateContactById
);

app.delete('/contacts/:id', contactsController.deleteContact);

app.use(errorHandlers.validationErrorHandler, errorHandlers.errorHandler);

module.exports = app;
