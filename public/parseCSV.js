/**
 * Created by yecalvin on 2017-03-14.
 */

var cache = [];

parsingCSV();

function parsingCSV() {
    const csvFilePath='<./coffee-on-campus - Sheet1.csv>';
    const csv=require('csvtojson');

    csv().fromFile(csvFilePath)
        .on('json',function (jsonObj) {
            console.log(jsonObj);
        // combine csv header row and csv line to a json object
        // jsonObj.a ==> 1 or 4
    }).on('done',function(error){
        console.log('end')
    })
}
