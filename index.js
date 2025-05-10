const express = require('express');
const app = express();
const  route  = require("./router");
const port = 5000;
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.json());

app.use("/api/v1",route)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});