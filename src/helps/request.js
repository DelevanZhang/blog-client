/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 14:40:33
 * @LastEditTime: 2019-08-20 20:12:46
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios';
import {Message} from 'element-ui';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com';
axios.defaults.withCredentials = true;

export default function request(url, type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
      let option = {
        url,
        method: type
      }
      if(type.toLowerCase() === 'get') {
        option.params = data
      }else {
        option.data = data
      }
      axios(option).then(res => {
        if(res.data.status === 'ok') {
          resolve(res.data)
        }else{
          Message.error(res.data.msg)
          reject(res.data)
        }
      }).catch(err => {
        Message.error('网络异常')
        reject({ msg: '网络异常' })
      })
    })
  }