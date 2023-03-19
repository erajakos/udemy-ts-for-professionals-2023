// npm i express
// types missing..
// npm i @types/express

import express from 'express';
const app = express();

app.get('/', function(req, res) {
    res.send('moro');
});

app.listen(3000, () => {
    console.log("Server started");
});

