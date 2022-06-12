function httpGetAsync(theUrl, callback) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function () {
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
            callback(xmlHttpReq.responseText);
    }
    xmlHttpReq.open("GET", theUrl, true); // true for asynchronous
    xmlHttpReq.send(null);
}

function getFlights(DataSharerIP)
{
    var url = 'http' + DataSharerIP + ':8754/flights.json';
    console.log(url)
    httpGetAsync(url, function(result){
        console.log(result);
        JSON.parse(result)

        // for (let i = 0; i < result.length; i++)
        // {
        //     var popup = L.popup()
        //         .setLatLng([result[0], -0.09])
        //         .setContent("I am a standalone popup.")
        //         .openOn(map);
        // }
    });

}