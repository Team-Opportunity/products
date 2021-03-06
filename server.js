const express = require('express');
const path = require('path');
require('express-async-errors'); //to use async functions in node
const mongoRouters = require('./mongo-database/router.js');
//you don't need to explicitly state module.export, but you MUST require the file where you are making the mongo connection fromn
require('./mongo-database/index.js');

const port = 3001;
const app = express();

app.use(express.static(path.join(__dirname,'frontend-capstone/dist')));
app.use('/', mongoRouters);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
