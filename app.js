const express = require('express');
const formidable = require('formidable');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req);

  form.on('fileBegin', (name, file) => {
    file.path = __dirname + '/uploads/' + file.name;
  });

  form.on('file', (name, file) => {
    console.log('Uploaded' + file.name);
  });

  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);