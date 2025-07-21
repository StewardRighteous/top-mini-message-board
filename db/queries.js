const { pool } = require("./pool");

async function addToMessages(user, text, added) {
  await pool.query(
    "INSERT INTO messages(username, text, added) VALUES ($1, $2, $3);",
    [user, text, added]
  );
}

async function getMessageId(id) {
  const { rows } = pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return rows;
}

async function getAllMessages() {
  const { rows } = pool.query("SELECT * FROM messages ");
  return rows;
}

module.exports = { addToMessages, getMessageId, getAllMessages };
