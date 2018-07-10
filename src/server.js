import React from 'react';

const express = require('express');
const chalk = require('chalk');
const path = require('path');

const port = (process.env.PORT || 8000);
const buildPath = express.static(path.join(__dirname, '../build'));
const indexPath = path.join(__dirname, '../build/index.html');

const app = express();

app.use(buildPath);
app.get('/', (req, res) => {
  res.send(indexPath);
});

app.listen(port, () => {
  console.log('Listening on port:', chalk.green(port));
});
