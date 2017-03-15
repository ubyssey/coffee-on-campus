/**
 * Created by yecalvin on 2017-03-14.
 */

var cache = [];
var csvFilePath = './public/coffee-on-campus.csv';

var ParsingCSV = function (){

};

ParsingCSV.prototype.parseCSV = function(){
    return new Promise(function(fulfill,reject){
        const csv=require('csvtojson');
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

module.exports = ParsingCSV;
