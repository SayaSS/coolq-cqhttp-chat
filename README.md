# coolq-cqhttp-chat
基于CQHTTP的酷Q机器人聊天插件
可以学习自定义的对话，并根据编辑距离来匹配回答

用1-(距离/比较两者最大长度)计算相似度

例如用[二次元]去匹配[少看点二次元]和[二次元]，前者距离为3，相似度为1-3/6,后者距离为0，相似度为1-0/3
## 1、酷Q
本插件依赖<a href="https://cqp.cc/" target="_blank">酷Q机器人</a>运作使用前请先安装酷q
## 2、coolq-http-api
本插件依赖[coolq-http-api](https://github.com/richardchien/coolq-http-api)运作,前往下载最新的[coolqhttpapi.cpk](https://github.com/richardchien/coolq-http-api/releases)并安装

配置cqhttp请参考[插件使用文档](https://cqhttp.cc/docs/4.13/#/)

或者参考以下配置方式
```ps1
打开酷Q目录里的data\app\io.github.richardchien.coolqhttpapi\${对应Q号}.ini
```
![配置1](https://pic.downk.cc/item/5e0c1a8476085c32892e3524.jpg)
![配置2](https://pic.downk.cc/item/5e0c1bbf76085c32892e6556.jpg)
![配置3](https://pic.downk.cc/item/5e0c1bd976085c32892e696c.jpg)

## 3、Node.js
需要[nodejs](https://nodejs.org/en/)作为运行环境

## 4、具体操作
①确保准备好以上内容

②安装
```ps1
git clone https://github.com/SayaSS/coolq-cqhttp-chat.git
cd coolq-cqhttp-chat
npm install
```

③请打开chat.js按照注释来配置聊天插件
配置示例:
![配置2](https://pic.downk.cc/item/5e0c863176085c32893fd838.jpg)

④运行
```ps1
node index
```

## 5、额外配置
因为没学习够对话前机器人会很笨。。所以可以先启用腾讯ai作为后备对话，但自己学习的优先度高

[前往申请appkey和appid](https://ai.qq.com/doc/nlpchat.shtml)

appkey和appid请在tencentAi.js里填写
