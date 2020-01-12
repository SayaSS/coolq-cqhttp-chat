const CQHttp = require('cqhttp');
const bot = new CQHttp({//请参考cqhttp配置文档进行配置
    apiRoot: '',
    accessToken: '',
    secret: ''
});
module.exports={
    bot,
    send_msg(context, message) {
        return new Promise((resolve, reject) => {
            bot('send_msg', {
                message_type: context.message_type,
                user_id: context.group_id || context.user_id || context.discuss_id,
                group_id: context.group_id || context.user_id || context.discuss_id,
                discuss_id: context.group_id || context.user_id || context.discuss_id,
                message: message,
            }).then(() => {
                resolve();
            }).catch(() => {
                reject();
            });
        })
    },
    start(){
        bot.listen(8086, '127.0.0.1');//请参考cqhttp配置文档进行配置
    }
}