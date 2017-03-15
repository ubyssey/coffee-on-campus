/**
 * Created by yecalvin on 2017-03-14.
 */

var cache = [];

var ParsingCSV = (function (){

    ParsingCSV.prototype.parseCSV = function(){
        return new Promise(function(fulfill,reject){
            const csvFilePath='./public/coffee-on-campus.csv';
            const csv=require('csvtojson');
            csv().fromFile(csvFilePath)
                .on('json',function (jsonObj) {
                    cache.push(jsonObj);
                }).on('done',function(error){
                    console.log(error);
                    fulfill(cache);
                });
        })
    }

    
});

// function ParsingCSV() {
//
//     return Promise()
//     const csvFilePath='./public/coffee-on-campus.csv';
//     const csv=require('csvtojson');
//
//     csv().fromFile(csvFilePath)
//         .on('json',function (jsonObj) {
//             // combine csv header row and csv line to a json object
//             // jsonObj.a ==> 1 or 4
//             cache.push(jsonObj);
//             //console.log(cache);
//     }).on('done',function(error){
//         console.log("end");
//         return cache;
//     });
// }

module.exports = ParsingCSV;