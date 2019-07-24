// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// // 读取文件显示在页面上 如果文件较大 改用流方式
// // const server = http.createServer((req, res) => {
// //   const fileName = path.resolve(__dirname, 'data.txt');
// //   fs.readFile(fileName, (err, data) => {
// //     res.end(data);
// //   })
// // })

// // stream常见来源有三种： 读取文件 控制台输入 request
// // 三种输出： 写入文件 控制台输出 response
// const server = http.createServer((req, res) => {
//   // const fileName = path.resolve(__dirname, 'data.txt');
//   // let stream = fs.createReadStream(fileName);
//   // stream.pipe(res);
//   process.stdin.on('data', (chunck) => {
//     res.end('222')
//     console.log(chunck);
//   })
// })



// server.listen(8000);



