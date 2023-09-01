const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 5500;

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'altariz',
};

const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Route to handle form submissions
app.post('/submit', (req, res) => {
  const formData = req.body;
  // Assuming your table has columns 'name', 'email', 'phone', 'selected_form', and 'message'
  const sql = 'INSERT INTO form_data(name, email, phone, selected, message) VALUES (?, ?, ?, ?, ?)';
  const values = [formData.name, formData.email, formData.phone, formData.selected, formData.message];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.sendStatus(500);
    } else {
      console.log('Form data inserted into the database successfully.');
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
