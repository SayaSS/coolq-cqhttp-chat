const app=require('./bot');
const bot=app.bot;
function test(){
    bot.on('message', context => {
        app.send_msg(context,'emmmm').then(()=>{
            console.log('还行')
        })
    })
}
module.exports={
    test
}