/**
 * @file use superagent
 */

let su = require('superagent');

let search = process.argv.slice(2).join(' ').trim();

// 没有提供关键字的情况下，增加帮助信息
if (!search.length) {
    return console.log('\n  Usage: node douban <search term>\n');
}

console.log('\n  searching for: \033[96m' + search + '\033[39m\n');

su.get('http://api.douban.com/v2/movie/search?')
    .send({q: search})
    .end(res => {
        let obj = res.body;
        obj.subjects.forEach(subject => {
            console.log('   \033[91m' + '执导作品: ' + subject.title + '\033[39m');
            console.log('   \033[94m' + '相关影评介绍地址: ' + subject.alt + '\033[39m');
            console.log('--');
        });
    })