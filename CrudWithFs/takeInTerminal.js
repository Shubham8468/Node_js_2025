const fs=require('fs');
//write at the same level when you enter the for file name for 
//exicute on the terminal .
const operation=process.argv[2];
if(operation=="write"){
    const fileName=process.argv[3];
    const fileData=process.argv[4];
    fs.writeFileSync("../html/"+fileName+'.txt',fileData);
    // console.log(operation,fileName,fileData);
}
else if(operation=="read"){
    const fileName=process.argv[3];
    let fileinfo=fs.readFileSync('../html/'+fileName+'.txt','utf-8');
    console.log(fileinfo);
}
else if(operation=='append'){
    const fileName=process.argv[3];
    const fileNewData=process.argv[4];
    fs.appendFileSync('../html/'+fileName+'.txt',fileNewData);
}
else if(operation=='delete'){
    const fileName=process.argv[3];
    fs.unlinkSync('../html/'+fileName+'.txt');
}
else{
    console.log("operation not found !!!!")
}