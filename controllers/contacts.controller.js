const { ContactDB } = require('./../models');

module.exports.getContacts = (req, res) => {
  const contacts = ContactDB.getContacts();
  res.status(200).send(contacts);
};

module.exports.createContact = (req, res) => {
  const { body } = req;

  const createdContact = ContactDB.createContact(body);
  res.status(201).send(createdContact);
};

module.exports.getContactById = (req, res) => {
  const { id } = req.params;
  // перевірити, чи є контакт із заданим id
  const foundContact = ContactDB.getContactById(id);
  if (foundContact) {
    // якщо є, то 200 і відправити
    return res.status(200).send(foundContact);
  }
  // якщо немає, то 404 Contact Not Found
  res.status(404).send('Contact Not Found');
};

module.exports.updateContactById = (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  const updatedContact = ContactDB.updateContact(id, body);
  if (updatedContact) {
    return res.status(200).send(updatedContact);
  }
  res.status(404).send('Contact Not Found');
};

module.exports.deleteContact = (req, res) => {
  const { id } = req.params;

  const deletedContact = ContactDB.deleteContact(id);
  if (deletedContact) {
    return res.status(204).send();
  }
  res.status(404).send('Not Found');
};
