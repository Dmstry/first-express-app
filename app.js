const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const contactsDB = [
  {
    id: 0,
    name: 'Test',
    telNumber: '+380123456789',
    birthday: '2000-12-01',
    isFavourite: false,
  },
  {
    id: 1,
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'y-MM-dd'),
    isFavourite: true,
  },
];

class ContactsDB {
  constructor(arr) {
    this.contacts = [...arr];
  }

  createContact(newContact) {
    this.contacts.push({ ...newContact, id: uuidv4(), isFavourite: false });
    return this.contacts[this.contacts.length - 1];
  }

  getContacts() {
    return [...this.contacts];
  }

  getContactById(id) {
    const foundIndex = this.contacts.findIndex((c) => c.id === Number(id));
    return foundIndex === -1 ? null : this.contacts[foundIndex];
  }

  updateContact(id, values) {
    const foundContactIndex = this.contacts.findIndex(
      (c) => c.id === Number(id)
    );
    if (foundContactIndex !== -1) {
      this.contacts[foundContactIndex] = {
        ...this.contacts[foundContactIndex],
        ...values,
      };
    }

    return foundContactIndex === -1 ? null : this.contacts[foundContactIndex];
  }

  deleteContact(id) {
    const foundContactIndex = this.contacts.findIndex(
      (c) => c.id === Number(id)
    );

    return foundContactIndex === -1
      ? null
      : this.contacts.splice(foundContactIndex, 1);
  }
}

const contactsDbInstance = new ContactsDB(contactsDB);

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello Express</h1>');
});

app.use(express.json());

// CRUD
app.get('/contacts', (req, res) => {
  const contacts = contactsDbInstance.getContacts();
  res.status(200).send(contacts);
});

app.post('/contacts', (req, res) => {
  const createdContact = contactsDbInstance.createContact(req.body);
  res.status(201).send(createdContact);
});

app.get('/contacts/:id', (req, res) => {});
app.patch('/contacts/:id', (req, res) => {});
app.delete('/contacts/:id', (req, res) => {});

module.exports = app;
