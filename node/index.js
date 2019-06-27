const express = require('express');
const db = require('./db');
const app = express();

process.on('SIGINT', ()=>{
    db.close(()=>{process.exit(0)});
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/flights', (req, res)=>{
    res.setHeader('Content-Type', 'application/Json');
    db.getAllFlights((resDb)=>{
        res.json(resDb);     
    });   
});

app.listen(3333, () => {
    console.log('Example app listening on port localhost:3333');
});