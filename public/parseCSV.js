/**
 * Created by yecalvin on 2017-03-14.
 */

var cache = [];
var csvFilePath = './public/coffee-on-campus.csv';
const csv=require('csvtojson');

var jsonfile = require('jsonfile');
var jsonFilePath = './public/data.json';


var ParsingCSV = function (){

};

ParsingCSV.prototype.parseCSV = function(){
    return new Promise(function(fulfill,reject){
        csv().fromFile(csvFilePath)
            .on('json',function (jsonObj) {
                cache.push(jsonObj);
            }).on('done',function(error){
            if(cache.length == 0){
                console.log(error);
                reject("Could not successfully parse csv");
            } else {
                console.log("csv has been parse");
                fulfill(cache);
            }
        });
    })
};

// delete data.json if data changes
ParsingCSV.prototype.writeOutData = function () {
    this.parseCSV().then(function(data){
        jsonfile.writeFile(jsonFilePath,data,function(err){
            console.log(err);
        })
    })
};

module.exports = ParsingCSV;
