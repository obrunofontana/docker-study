const express = require('express');

const app = express();

app.get('/', function(req, res) {
  return res.send('Server is running')
});

app.listen(3000, function() {
  console.log('Express server listening on port 3000');
});