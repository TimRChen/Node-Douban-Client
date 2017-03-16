/**
 * @file An HTTP tweets client
 */

let http = require('http');

// 请求地址信息
let info = {
    host: '127.0.0.1',
    port: 3000,
    url: '/',
    method: 'GET'
};

// 调用 request 方法，用于初始化一个新的http.Client Request对象
// 调用完 request 方法后，还需要调用 end，原因是创建完一个请求后
// 在发送给服务器前还可以和 request对象进行交互
http.request(info, res => {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        body += chunk;
    });
    res.on('end', () => {
        console.log('\n We got: \033[96m' + body + '\033[39m\n');
    });
}).end();
