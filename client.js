/**
 * @file An HTTP tweets client
 */

let http = require('http');
let qs = require('querystring');

// 请求地址信息
let options = {
    host: '127.0.0.1',
    port: 3000,
    url: '/',
    method: 'POST'
};

let send = theName => {
    http.request(options, res => {
        console.log('\n  \033[90m  request complete!\033[39m');
        process.stdout.write('\n  your name: ');
    }).end(qs.stringify({name: theName}));
    // qs.stringify 将 name: theName 转化为 name=theName即查询字符串
};

// 用户输入提示
process.stdout.write('\n  your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data', name => {
    send(name.replace('\n', ''));
});



// 调用 request 方法，用于初始化一个新的http.Client Request对象
// 调用完 request 方法后，还需要调用 end，原因是创建完一个请求后
// 在发送给服务器前还可以和 request对象进行交互