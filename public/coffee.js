/**
 * Created by yecalvin on 2017-03-17.
 */
var coffeeData;

$.getJSON("data.json", function (data) {
    $("#output").append("<tr><th>Name</th>" +
        "<th>Location</th>" +
        "<th>Payment Options</th>" +
        "<th>Price (medium sized coffee)</th>" +
        "<th>Average Wait Time</th>" +
        "</tr>");

    for (var index in data) {
        var name = "<tr><td>" + data[index].storeName + "</td>";
        var loc = "<td>" + data[index].location + "</td>";
        var po = "<td>" + data[index]["payment options"] + "</td>";
        var price = "<td>" + data[index]["price (medium coffee)"] + "</td>";
        var avgWaitTime = "<td>" + data[index]["avgWaitTime"] + "</td></tr>";
        $("#output").append(name + loc + po + price + avgWaitTime);
    }
    coffeeData = data;
});

 $("#but1").click(function() {
     var quality = $("#quality").val();
     var service = $("#service").val();
     var waitTime = $("#waitTime").val();

     var matchingPlaces;

     if (quality == "noPreference" && service == "noPreference" && waitTime == "noPreference") {
         alert('Please select a Preference');
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
        coffeeData[index].score = coffeeData[index].quality*weightQ + coffeeData[index].service*weightS + coffeeData[index].waitTime*weightT;
     }

     coffeeData.sort(function(a, b) {
         return parseFloat(a.score) - parseFloat(b.score);
     });

     console.log(coffeeData[0]);
 });

$("#but2").click(function() {
    var quality = $("#quality").val();
    var service = $("#service").val();
    var waitTime = $("#waitTime").val();

    console.log(quality);
    console.log(service);
    console.log(waitTime);
    console.log(coffeeData);
    var matchingPlaces;

    for (var index in coffeeData) {
        if (quality != "noPreference" && coffeeData[index].quality == quality ) {
            matchingPlaces.push(coffeeData[index]);
        }

    }
});

$("#but3").click(function() {
    var quality = $("#quality").val();
    var service = $("#service").val();
    var waitTime = $("#waitTime").val();

    console.log(quality);
    console.log(service);
    console.log(waitTime);
    console.log(coffeeData);
    var matchingPlaces;

    for (var index in coffeeData) {
        if (quality != "noPreference" && coffeeData[index].quality == quality ) {
            matchingPlaces.push(coffeeData[index]);
        }

    }
});

