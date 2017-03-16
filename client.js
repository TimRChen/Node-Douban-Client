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
http.request(info, res => {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        body += chunk;
    });
    res.on('end', () => {
        console.log('\n We got: \033[96m' + body + '\033[39m\n');
    });
});