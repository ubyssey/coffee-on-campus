/**
 * Created by yecalvin on 2017-03-17.
 */
var coffeeData;

$.getJSON("data.json", function(data){
   coffeeData = data;
});

function handleQuery(){
    var quality = $("#quality").val();
    var service = $("#service").val();
    var waitTime = $("#waitTime").val();
    var price = $("#price").val();

    if (quality == "noPreference" && service == "noPreference" && waitTime == "noPreference" && price == "noPreference") {
        alert('Please select a Preference');
        return;
    }
    var weightQ = 0;
    var weightS = 0;
    var weightT = 0;
    var weightP = 0;

    if (quality == "goodQuality") {
        weightQ = 1;
    } else if (quality == "avgQuality") {
        weightQ = 0.5;
    } else if (quality == "poorQuality") {
        weightQ = 0.1;
    }

    if (price == "goodPrice") {
        weightP = 1;
    } else if (price == "avgPrice") {
        weightP = 0.5;
    } else if (price == "poorPrice") {
        weightP = 0.1;
    }

    if (service == "goodService") {
        weightS = 1;
    } else if (service == "avgService") {
        weightS = 0.5;
    } else if (service == "poorService") {
        weightS = 0.1;
    }

    if (waitTime == "fast") {
        weightT = 1;
    } else if (service == "slow") {
        weightT = 0.5;
    }

    for (var index in coffeeData) {
        coffeeData[index].score = coffeeData[index].price*weightP + coffeeData[index].quality*weightQ + coffeeData[index].service*weightS + coffeeData[index].waitTime*weightT;
    }

    coffeeData.sort(function(a, b) {
        return parseFloat(a.score) - parseFloat(b.score);
    });
}

function printOutData(dat,size) {
    $("#output").empty();
    $("#output").append("<tr><th>Name</th>" +
        "<th>Location</th>" +
        "<th>Price (medium sized coffee)</th>" +
        "<th>Link</th>" +
        "</tr>");

    for (var i=0; i<size ; i++){
        var name = "<tr><td>" + dat[i].Name + "</td>";
        var loc = "<td>" + dat[i].Location + "</td>";
        var price = "<td>" + dat[i]["Price (medium coffee)"] + "</td>";
        var link = "<td>" + dat[i].link + "</td></tr>";
        $("#output").append(name + loc + price + link);
    }
}

 $("#but1").click(function() {
     handleQuery();
     printOutData(coffeeData, 1);
 });

$("#but2").click(function() {
    handleQuery();
    printOutData(coffeeData, 3);
});

$("#but3").click(function() {
    handleQuery();
    printOutData(coffeeData, 5);
});

