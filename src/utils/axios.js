/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import {
	objPlan
} from './mixin.js'
import store from '../store/index'
import { Toast } from 'vant';
// 环境
let urlObj = 'http://113.108.79.80:3020/appServer/'
// 超时时间
axios.defaults.timeout = 60000
// 请求头
axios.defaults.responseType = 'json'
 // axios.defaults.withCredentials = true  //设置跨域
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// http请求拦截器 --加密等
axios.interceptors.request.use(config => {
	
	if (config.url.indexOf('doLogin') == -1 && config.url.indexOf('register') == -1) { //是否需要加入token的接口
		config.headers.common['Authorization'] = store.getters.token; //配置token
	}
	
	if (config.url.indexOf('doLogin') != -1) { //登录接口 更换请求头
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		config.url = urlObj + config.url + '?' + objPlan(config.data, 1);
	} else {
		config.url = urlObj + config.url;
	}
	return config
}, error => {
	return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
	return data.data
}, error => {
	if(!error.response){  //无响应，断网了~~
		Toast("请求异常，请确认网络是否正常");
	}else{
		Toast("请求异常，请稍后再试");
	}
	return Promise.reject(error)
})
export default axios
