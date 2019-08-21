/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 19:23:09
 * @LastEditTime: 2019-08-21 19:40:39
 * @LastEditors: Please set LastEditors
 */
//一个时间插件
function friendlyDate(dateStr){
    let dateObj = typeof dateStr ==='object'?dateStr:new Date(dateStr)
    let time = dateObj.getTime();
    let now =Date.now();
    let space = now - time;
    let str =''
    switch (true){
        case space<1000*60:
        str = '刚刚'
        break;
        case space<1000*60*60:
        str = Math.floor(space/(1000*60))+'分钟前'
        break;
        case space < 1000*60*60*24:
        str = Math.floor(space/(1000*60*60))+'小时前'
        break;
        case space <1000*60*60*24*360:
        str = Math.floor(space/(1000*60*60*24))+'天前'
        break;
        default:
        str = Math.floor(space/(1000*60*60*24*360))+'年前'
    }
    return str;
}

export default {
    install(vue,options){
        vue.prototype.friendlyDate = friendlyDate
    }
}