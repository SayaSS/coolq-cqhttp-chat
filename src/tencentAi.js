const uuid = require('uuid');
const crypto = require('crypto');
const Qs = require('qs');
const axios = require('axios');
const appkey='';//请填写appkey
const appid='';//请填写appid
function tencentAlp(message) {
    return new Promise(function (resolve, reject) {
        let map=new Map();
        let random_str=uuid.v4();
        if (random_str.length>32) {//随机字符串32位上限
            random_str=random_str.slice(0,31)
        }
        map.set("app_id",appid);
        map.set("time_stamp",Math.round(new Date().getTime()/1000));
        map.set("nonce_str",random_str);
        map.set("session",'10101');
        map.set("question",message.replace(/\[(\S*)]/g,''));
        map.set("sign","");
        map.set("sign",getReqSign(map,appkey));
        let data={
            app_id:map.get('app_id'),
            time_stamp:map.get('time_stamp'),
            nonce_str:map.get('nonce_str'),
            sign:map.get('sign'),
            session:map.get('session'),
            question:map.get('question'),
        };
        axios({
            url:'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat',
            method: 'post',
            data:Qs.stringify(data)
        }).then(res=>{
            console.log(res.data);
            let reply=res.data.data.answer;
            resolve(reply);
        }).catch(err=>{
            reject(err);
        });
        return 0;
    })
}
function getReqSign(params,appkey) {
    let arrayObj=Array.from(params);
    let str='';
    arrayObj.sort(function(a,b){return a[0].localeCompare(b[0])});
    arrayObj.map((value) =>{
        if (value[1]!==''){
            str+=(value[0]+'='+encodeURIComponent(value[1])+'&')
        }
    });
    str+=('app_key='+appkey);
    return md5Crypto(str).toUpperCase()
}

function md5Crypto(password){
    const hash = crypto.createHash('md5');
    hash.update(password);
    return hash.digest('hex');
}
module.exports={
    tencentAlp
}