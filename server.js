/**
 * @file 建立httpServer
 * @author <huangjiandong>
 */

let http = require('http');
let qs = require('querystring');

http.createServer((req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        res.writeHead(200);
        res.end('Done');
        console.log('\n  got name \033[90m' + qs.parse(body).name + '\033[39m\n');
        // qs.parse 将name=theName 转化为 { name: theName }
    });
}).listen(3000);

