const http=require('http');
const fs=require('fs');
const qureyString = require('querystring');
http.createServer((req,resp)=>{
    fs.readFile("../html/form.html","utf-8",(error,data)=>{
        if(error){
          resp.writeHead(500,{"Content-Type":"txt/plain"});
          resp.write("<h1> Error from inside Server");
          resp.end();
        }
        resp.writeHead("200",{"content-Type":"txt/html"});
        if(req.url=='/'){
            resp.write(data);
            resp.end();
        }
        if(req.url=='/submit'){
            let dataBody=[];
            req.on("data",(chuck)=>{
                dataBody.push(chuck);
            })
            req.on("end",()=>{
                let rawData=Buffer.concat(dataBody).toString();
                let readableData=qureyString.parse(rawData);
                let dataPass="My name is "+readableData.name +" And my email is "+readableData.email;
                console.log(dataPass);
                fs.writeFile('../text'+readableData.name+'.txt',dataPass,(error)=>{
                    if(error){
                        resp.end("internal file Error !!");
                        return false;
                    }
                    else{
                        console.log("File create successfully!!");
                        resp.write("<p>Thanku !!");
                        resp.end();
                    }
                })
            })
            resp.write("<p>Thank you for the submitting the information </p>")
        }
        resp.end();
    })

}).listen(4800);