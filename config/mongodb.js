/**
 * Created by zink1 on 07/09/2015.
 */
var mongoose = require('mongoose'),
    conf = require('./config');

//TODO change that latter Mais pourquoi meryl est fou NON!!! on tentera d'avoir une connection toujours ouverte plutot que d'en ouvrire une a chaque request

module.exports = function(){
    mongoose.connect(conf.db);
    var db = mongoose.connection;

    db.on('open', function (cb) {
     console.log('db connection on ');
    });

    //TODO penser a bien fermer les connections sinon y une erreur
    db.on('error', function(err){
        console.error('Failed to connect at '+ conf.db+'why'+err.toString());
    });

    db.close(function(){
        console.log('Closed connection to mongo');
    })
return db;
};