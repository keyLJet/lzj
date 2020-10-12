/* const fs = require("fs");
const path = require("path");
const http = require("http")
// const readFilepath = path.resolve(__dirname,"./liuwer/index.html");
// const rs = fs.createReadStream(readFilepath);

const server = http.createServer((request,response) => {
    response.setHeader("content-Type","text/html;charset=utf-8");
    // rs.pipe(response)

    response.end('<h1>congratulations,bro!</h1>');
})

const port = 5220;
const host = "192.168.20.31";
server.listen(port,host,(err) =>{
    if(err) {
        console.log('服务器启动失败:' + err);
        return
    }
    
    console.log(`启动成功，请点击http://${host}:${port}`)
}) */



/* const fs = require('fs');
const path = require('path');
const readFilepath = path.resolve(__dirname,"./forRead.mp4");
const writeFilepath = path.resolve(__dirname,"./toWrite.mp4");
const rs = fs.createReadStream(readFilepath);
const ws = fs.createWriteStream(writeFilepath);
rs.pipe(ws); */