const express = require('express');
const db = require('./db');
const app = express();

process.on('SIGINT', ()=>{
    db.close(()=>{process.exit(0)});
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/Ventilateur', (req, res)=>{
    res.setHeader('Content-Type', 'application/Json');
    db.getVentilateur((resDb)=>{
        res.json(resDb);     
    });   
});

app.get('/Climatiseur', (req, res)=>{
    res.setHeader('Content-Type', 'application/Json');
    db.getClimatiseur((resDb)=>{
        res.json(resDb);     
    });   
});

app.get('/ClimatiseurEcolo', (req, res)=>{
    res.setHeader('Content-Type', 'application/Json');
    db.getClimatiseurEcolo((resDb)=>{
        res.json(resDb);     
    });   
});

app.get('/Eventail', (req, res)=>{
    res.setHeader('Content-Type', 'application/Json');
    db.getEventail((resDb)=>{
        res.json(resDb);     
    });   
});

app.get('/Brumisateur', (req, res)=>{
    console.log("test");
    res.setHeader('Content-Type', 'application/Json');
    db.getBrumisateur((resDb)=>{
        res.json(resDb);     
    });   
});


app.listen(3333, () => {
    console.log('Example app listening on port localhost:3333');
});