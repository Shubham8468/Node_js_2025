var http=require('http');
http.createServer((req,resp)=>{
    resp.write("<h1> hello this is my first node server </h1>")
resp.end("welcome to node js server !")// resp.end() is used to end the response process..otherwise it will keep loading
}).listen(4800);

var htt=require('http');
htt.createServer((req,resp)=>{
    resp.write("<h1> hello this is my second node server </h1>")
    resp.end(" welcome to my second node server ");
}).listen(4900);