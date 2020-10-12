const http = require("http");
const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html;charset=utf-8")
    //返回相应
    response.end("<h1>lzj</h1>");
})
const port = 3000;
const host = "192.168.20.31";
server.listen(port, host, (err) => {
    if (err) {
        console.log("服务器启动失败：" + err);
        return;
    }
    console.log(`服务器启动成功:请访问 http://${host}:${port}`)
})