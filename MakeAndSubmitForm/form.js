const http = require("http");
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    console.log(req.url);
    if (req.url == '/'){
        resp.write(`
        <form action="/submit" method="POST">
        <input type="text" placeholder="userName" name="name"/>
        <input type="text"placeholder="Enter your Email" name="email"/>
        <button>Submit</button>
        </form>
        `);
        resp.end();

    }
    else if (req.url == '/submit') {
        resp.write("<h1>Form Submitted Successfully</h1>")
        resp.end();
    }
}).listen(3200);
