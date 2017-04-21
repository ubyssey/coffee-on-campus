/**
 * Created by yecalvin on 2017-03-17.
 */
var ga;

$.getJSON("data.json", function (data) {
    $("#output").append("<tr><th>Name</th>" +
        "<th>Location</th>" +
        "<th>Payment Options</th>" +
        "<th>Price (medium sized coffee)</th>" +
        "<th>Quality</th>" +
        "<th>Service</th>" +
        "<th>Average Wait Time</th>" +
        "</tr>");

    for (var index in data) {
        console.log(data);
        console.log(data[index].quality);
        var name = "<tr><td>" + data[index].Name + "</td>";
        var loc = "<td>" + data[index].Location + "</td>";
        var po = "<td>" + data[index]["payment options"] + "</td>";
        var price = "<td>" + data[index]["Price (medium coffee)"] + "</td>";
        var quality = "<td>" + data[index].quality + "</td>";
        var service = "<td>" + data[index].service + "</td>";
        var avgWaitTime = "<td>" + data[index]["waitTime"] + "</td></tr>";
        $("#output").append(name + loc + po + price + quality + service + avgWaitTime);
    }
});

// $("#cal").click(function() {
//     $("#hi").remove();
// });