/**
 * Created by yecalvin on 2017-03-14.
 */

var cache = [];

function ParsingCSV() {
    const csvFilePath='./public/coffee-on-campus.csv';
    const csv=require('csvtojson');

    csv().fromFile(csvFilePath)
        .on('json',function (jsonObj) {
            console.log(jsonObj);
            console.log('failed to get to there');
        // combine csv header row and csv line to a json object
        // jsonObj.a ==> 1 or 4
    }).on('done',function(error){
        console.log('end');
        console.log('got to here');
    })
}

module.exports = ParsingCSV;