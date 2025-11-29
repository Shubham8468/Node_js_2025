const http = require('http');
http.createServer((req, resp) => {
    if (req.url == '/') {
        resp.write("This is Home page!!!");
    }
    else if (req.url == '/about') {
        resp.write("About page!!!")
    }
    else {
        resp.write("Another page!!!")
    }
    resp.end();
}).listen(4900);