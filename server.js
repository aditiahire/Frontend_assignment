const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let items = []; // In-memory storage

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = Date.now(); // Generate a unique ID (in a real app, use a proper ID generator)
  items.push(newItem);
  res.json(newItem);
});

app.get('/api/items', (req, res) => {
  res.json(items);
});

// Add a route handler for the root
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
