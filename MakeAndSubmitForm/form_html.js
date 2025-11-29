const http=require('http');
const fs=require('fs');
http.createServer((req,resp)=>{
fs.readFile('../html/form.html',"utf-8",(error,data)=>{
    
    if(error){
        resp.writeHead(500,{"Content-Type":"text/plain"})
        resp.end("file not found");
    }
    else if (req.url=='/'){
        resp.writeHeader(200,{"Content-Type":"text/html"})
        resp.write(data);
        resp.end();
    }
    else if(req.url=='/submit'){
        resp.writeHead(200,{"Content-Type":"text/html"})
        resp.write("<h1>Form Submitted </h1>")
        resp.end(); 
    }
})

}).listen(3200);