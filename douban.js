/**
 * @file douban api v2  搜索影人信息
 */

let http = require('http');
let qs = require('querystring');

let search = process.argv.slice(2).join(' ').trim();

// 没有提供关键字的情况下，增加帮助信息
if (!search.length) {
    return console.log('\n  Usage: node douban <search term>\n');
}

console.log('\n  searching for: \033[96m' + search + '\033[39m\n');

let options = {
    host: 'api.douban.com',
    path: '/v2/movie/search?' + qs.stringify({q: search})
};

http.request(options, res => {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', chunk => {
        body += chunk;
    });
    res.on('end', () => {
        let obj = JSON.parse(body);
        obj.subjects.forEach(subject => {
            console.log('   \033[91m' + '执导作品: ' + subject.title + '\033[39m');
            console.log('   \033[94m' + '相关影评介绍地址: ' + subject.alt + '\033[39m');
            console.log('--');
        });
    });
}).end();

// 也可以使用如下形式，无需调用end()方法
// http.get(options, res => {
    // ..code
// });
