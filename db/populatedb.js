const { Client } = require("pg");

const SQL = `CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    username VARCHAR(255), 
    text VARCHAR(255), 
    added TIMESTAMP);
    `;

const SQL2 = `  INSERT INTO messages(username, text, added) VALUES 
        ('Amanda', 'Hi There!', $1),
        ('Charles', 'Hello World!', $2);`;

async function main() {
  console.log("seeding...");
  const client = new Client({ connectionString: process.argv[2] });
  await client.connect();
  await client.query(SQL);
  console.log("1passes");
  const date = new Date();
  await client.query(SQL2, [date, date]);
  await client.end();
  console.log("done...");
}

main();
