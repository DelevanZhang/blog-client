/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 14:40:33
 * @LastEditTime: 2019-08-20 16:00:59
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios';
import {Message} from 'element-ui';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com';
axios.defaults.withCredentials = true;

export default function request(url,type='get',data={}){
    return new Promise((resolve,reject)=>{
        let options = {
            url,
            method:type.toLowerCase(),
            data:data
        }
        axios(options)
            .then(res=>{
                if(res.status === 200){
                    resolve(res.data)
                }else {
                    Message.error(res.data.msg)
                    reject(res.data)
                }
            })
            .catch(err=>{
                Message.error('网络异常');
                reject({ msg: '网络异常' })
            })

    })
}