/**
 * The Server Can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

const data      = require('./data');
const http      = require('http');
const hostname  = 'localhost';
const port      = 3035;
const url       = require('url');


/**
 * Start the Node Server Here...
 *
 * The http.createServer() method creates a new server that listens at the specified port.
 * The requestListener function (function (req, res)) is executed each time the server gets a request.
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http.createServer(function (request, response) {
    // .. Here you can create your data response in a JSON format

    response.setHeader("Access-Control-Allow-Origin", "*"); // allow cors origin

    var queryData = url.parse(request.url, true).query;
    let result = [];

    data.forEach(element => {
        /*
         tags içinde arama yapmak için if bloğuna

          " || element.tags.filter(tag => tag.toLowerCase().includes(queryData.filter.toLowerCase())).length > 0 "

          kısmını eklemeye çalıştım. Ancak " includes" methodu içinde bulunan " queryData.filter.toLowerCase() "
          kısmındaki " toLowerCase " adımında uygulama patladığı için ekleyemedim. Ancak mantığı bu şekilde.
         */
            if(element.isActive === "true" &&
                (element.name.toLowerCase().includes(queryData.filter.toLowerCase()) ||
                    element.about.toLowerCase().includes(queryData.filter.toLowerCase()))  ) {
                result.push(element);
            }
        }
    )

    var json = JSON.stringify(result);

    response.end(json);
}).listen( port );

console.log(`[Server running on ${hostname}:${port}]`);
