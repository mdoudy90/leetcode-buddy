const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));