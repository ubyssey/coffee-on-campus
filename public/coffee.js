/**
 * Created by yecalvin on 2017-03-17.
 */
var ga;

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
});

// $("#cal").click(function() {
//     $("#hi").remove();
// });