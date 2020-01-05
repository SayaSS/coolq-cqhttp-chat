const app=require('./src/bot');
const chat=require('./src/chat');
chat.load();
app.start();
console.log('插件已开始运行');
