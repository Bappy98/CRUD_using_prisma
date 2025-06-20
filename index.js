const express = require('express');
const app = express();
const  route  = require("./router");
const port = 5000;
const morgan = require('morgan');
const bookController = require('./controller/bookController')

app.use(morgan('dev'));

app.use(express.json());

app.use("/api/v1",route)


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((err,req,res,next)=>{
    console.log(err);
    
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});