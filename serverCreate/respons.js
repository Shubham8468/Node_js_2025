const http=require('http');
const age=24;
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.write(`
        <html>
        <head>
        <title> Node 2025 </title>
        </head>
        <body>
        <h1> welcome to Node 2025 with shubham</h1>
        <h2> Age:${age}</h2>
        <p>${new Date()}</p>
        </body>
            
        
        </html>`);

 resp.end();
}).listen(4800)