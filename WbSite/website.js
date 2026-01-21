const http=require('http');
const fs=require('fs');
http.createServer((req,resp)=>{
  fs.readFile('../html/Home.html','utf-8',(error,data)=>{
    if(error){
      resp.writeHead(500,{"Content-Type":"text/plain"})
      resp.end("internal server Error");
    }
    else if(req.url=='/'){
      resp.write(data);
     
    }
     resp.end();
  })
 
 
}).listen(3600);