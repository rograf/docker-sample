const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/v1/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});