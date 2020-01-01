const CQHttp = require('cqhttp');
const bot = new CQHttp({//请参考cqhttp配置文档进行配置
    apiRoot: '',
    accessToken: '',
    secret: ''
});

function start() {
    bot.listen(8086, '127.0.0.1');//请参考cqhttp配置文档进行配置
}

module.exports={
    bot,
    start
}