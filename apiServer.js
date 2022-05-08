const http = require('http');
let url = require('url');
const port = process.argv[2];

var server = http.createServer((request, response) => {
    if (request.method=='GET') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        let parsedReq = url.parse(request.url, true);
        let date = new Date(parsedReq.query['iso']);
        if (parsedReq.pathname == "/api/parsetime") {
            date = '{"hour":'+ date.getHours() +',"minute":'+ date.getMinutes() +',"second":'+ date.getSeconds() +'}';
        } else if (parsedReq.pathname == "/api/unixtime") {
            date = '{"unixtime":'+ Date.parse(date.toISOString()) +'}';
        }
        response.end(date);
    }
});
server.listen(port);