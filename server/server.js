const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

// Create connection to SQLite database
const db = new sqlite3.Database('./dua_main.sqlite');

app.use(cors());

const baseUrl = 'https://duas-page.vercel.app/'

app.get(`${baseUrl}category`, (req, res) => {
  // Execute SQL query to fetch data
  db.all('SELECT * FROM category',  (err, rows) => {
      if (err) {
          console.error(err.message);
          return res.status(500).send('Internal Server Error');
      }
      // Send fetched data as JSON response
      res.json(rows);
  });
});
app.get(`${baseUrl}duas`, (req, res) => {
  // Execute SQL query to fetch data
  db.all('SELECT * FROM dua',  (err, rows) => {
      if (err) {
          console.error(err.message);
          return res.status(500).send('Internal Server Error');
      }
      // Send fetched data as JSON response
      res.json(rows);
  });
});

app.get(`${baseUrl}duas/:cat_id`, (req, res) => {
  console.log("req params : ", req.params);
  const cat_Id = req.params.cat_id;
  // Execute SQL query to fetch data
  db.all(`SELECT * FROM dua WHERE cat_id='${cat_Id}'`,  (err, rows) => {
      if (err) {
          console.error(err.message);
          return res.status(500).send('Internal Server Error');
      }
      // Send fetched data as JSON response
      res.json(rows);
  });
});

// Start the server
const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
