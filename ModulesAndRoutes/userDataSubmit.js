const queryString=require('querystring');
function userDataSubmit(req,resp){
   let dataBody=[];
   req.on("data",(chuck)=>{
    dataBody.push(chuck);
   })
   req.on("end",()=>{
    let rawData=Buffer.concat(dataBody).toString();
    let readableData=queryString.parse(rawData);
    let dataString ="My Name is "+readableData.name +" and my email is "+readableData.email;
    console.log(dataString)
    
   })
resp.write("<h1>Submit successfully !!!!</h1>");
}
module.exports= userDataSubmit;