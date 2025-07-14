let id = 2;

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString(),
  },
];

function addToMessages(user, text, added) {
  messages.push({ id, user, text, added });
  id++;
}

function getMessage(id) {
  return messages.filter((message) => message.id == id);
}

module.exports = { messages, addToMessages, getMessage };
