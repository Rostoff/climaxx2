const MongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017/ClimaxxDB';

let dbConn;

const connect = function(cb) {
    MongoClient.connect(mongoURL, { useNewUrlParser: true }, (err, db) => {
        if (err)
            throw err;
    
        console.log('Connecté à MongoDb :)');
    
        dbConn = db;
        cb();
    })
}

let getVentilateur= function(cb){
    if(!dbConn) {
        connect(() => getVentilateur(cb));
        return;
    }
    dbConn.db('ClimaxxDB').collection("Ventilateur").find({}).toArray((err, result)=>{
        if (err){
            console.log("err");
            return;
        }
        cb(result);
    });
};
let getClimatiseur= function(cb){
    if(!dbConn) {
        connect(() => getClimatiseur(cb));
        return;
    }
    dbConn.db('ClimaxxDB').collection("Climatiseur").find({}).toArray((err, result)=>{
        if (err){
            console.log("err");
            return;
        }
        cb(result);
    });
};
let getClimatiseurEcolo= function(cb){
    if(!dbConn) {
        connect(() => getClimatiseurEcolo(cb));
        return;
    }
    dbConn.db('ClimaxxDB').collection("ClimatiseurEcolo").find({}).toArray((err, result)=>{
        if (err){
            console.log("err");
            return;
        }
        cb(result);
    });
};

let getEventail= function(cb){
    if(!dbConn) {
        connect(() => getEventail(cb));
        return;
    }
    dbConn.db('ClimaxxDB').collection("Eventail").find({}).toArray((err, result)=>{
        if (err){
            console.log("err");
            return;
        }
        cb(result);
    });
};

let getBrumisateur= function(cb){
    if(!dbConn) {
        connect(() => getBrumisateur(cb));
        return;
    }
    dbConn.db('ClimaxxDB').collection("Brumisateur").find({}).toArray((err, result)=>{
        if (err){
            console.log("err");
            return;
        }
        cb(result);
    });
};
0 // bite mdr
1 // tro marran
0 //
0

module.exports = {
    getBrumisateur, getVentilateur, getEventail, getClimatiseur, getClimatiseurEcolo
}