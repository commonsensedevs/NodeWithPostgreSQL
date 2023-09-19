const { Client } = require('pg');

const client = new Client({
    host: 'localhost',  // Docker host or IP where Docker is running
    port: 5432,         // Port exposed from the Docker container
    user: 'postgres',     // Username specified when the container was created
    password: 'Forpostgresdev1', // Password specified when the container was created
    database: 'PostgresSQLDemoDb'  // Database name specified when the container was created
  });
  
client.connect();

const table = 'CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))'
const text = 'INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *'
const values = ['Mona the', 'Octocat', 9, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States', 'octocat@github.com']

client.query(table, (err, res) => {
    if (err) throw err
});

client.query(text, values, (err, res) => {
    if (err) throw err
});

client.query('SELECT * FROM student', (err, res) => {
    if (err) throw err
    console.log(err, res.rows) // Print the data in student table
    client.end()
});