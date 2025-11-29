var http=require("http");
http.createServer((req,resp)=>{
    resp.write(" hello this is my first node server  ");
   resp.end(" welcome to my first node server ");
}).listen(4800);

// var htt=require('http');
// htt.createServer((req,resp)=>{
//     resp.write(" hello this is my second node server ")
//     resp.end(" welcome to my second node ");
// }).listen(4900);