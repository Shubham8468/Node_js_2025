const http=require("http");
const fs=require('fs');
const queryString=require('querystring');//this is used to convert raw data to readable format
http.createServer((req,resp)=>{
fs.readFile('../html/form.html','utf-8',(error,data)=>{
     if(error){
        resp.writeHead(500,{"Content-Type":"text/plain"});
        resp.write("File not Found ");
        resp.end();
     }
     resp.writeHead(200,{"Content-Type":"text/html"})
    if(req.url=='/'){
        resp.write(data);
        resp.end();
    }
    else if(req.url=='/submit'){
        let dataBody=[];
        //data come in chuncks so we have to collect all chuncks
        //and push them into dataBody array
        req.on("data",(chuck)=>{
            dataBody.push(chuck);
        })
        //when all data is received then we will process it
        //after receiving all data 'end' event is emitted
        //and convert all chuncks into readable format
        req.on("end",()=>{
            let rawData=Buffer.concat(dataBody).toString();
            let readableData=queryString.parse(rawData);
            console.log(readableData);
        }) 
        resp.write(`<p>Thank you  for submitting the form.</p>`);
        
        
        resp.end();
    }
})

}).listen(4800);