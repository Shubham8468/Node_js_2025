const http=require('http');
http.createServer((req,resp)=>{
    const userData=[
        {
            name:"shubham",
            age:21,
            city:"Mau",
            pin:275302
        },
        {
            name:"sam",
            age:23,
            city:"Delhi",
            pin:110001
        },
        {
            name:"peter",
            age:56,
            city:"London",
            pin:560034
        }
    ]
    resp.setHeader("Content-Type","application/json")
    //this are use for the difine tha data type
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(4800);