const app=require('./src/bot');
const ocr=require('./src/ocr');
const chat=require('./src/chat');
ocr.ocr();
chat.load();
app.start();
console.log('插件已开始运行');