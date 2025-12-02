const http = require('http');
const fs = require('fs');
const qureyString = require('querystring');
http.createServer((req, resp) => {
    fs.readFile('../html/form.html', 'utf-8', (error, data) => {
        if (error) {
            resp.writeHead(500, { "Content-Type": "text/plain" });
            resp.end("File not Found");
        }
        resp.writeHead("200", { "Content-Type": "text/html" });
        if (req.url == '/') {
            resp.write(data);
            resp.end();
        } 
        if (req.url == '/submit') {
            let dataBody = [];
            req.on("data", (chuck) => {
                dataBody.push(chuck);
            })
            req.on("end", () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = qureyString.parse(rawData);
                console.log(readableData);
                let dataString = "My name is " + readableData.name + "  and my email id is " + readableData.email;
                console.log(dataString);
                // fs.writeFileSync('../text/'+readableData.name+".txt",dataString);
                // console.log("File created successfully");   
                fs.writeFile('../text/'+readableData.name+".txt",dataString,(error)=>{
                    if(error){
                        resp.end("internal server error");
                        return false;
                    }
                    else{
                        console.log("File created successfully");
                        resp.write(`<p>Thank you for submitting the form.</p>`);
                        resp.end();
                    }
                })
            })
            resp.write(`<p>Thank you for submitting the form.</p>`);

        }
        resp.end();
    })

}).listen(4800);