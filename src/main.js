// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill()       
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import '@/plugins/rem'
import store from '@/store'
import FastClick from 'fastclick'
import 'normalize.css'  //类似reset.css
import './assets/styles/border.css' // 移动端一像素边框解决
import './assets/styles/iconfont.css'
import './assets/styles/iconfont.js'
import { AppFlag } from './utils/mixin.js'
import Vconsole from 'vconsole' //移动端控制台工具
if ('addEventListener' in document) { //解决移动端300S点击延迟
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
//处理fastClick带来的ios上input聚焦失效问题
FastClick.prototype.focus = function(targetElement) {
var length;
 if ((AppFlag()=="1")&& targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length;
    targetElement.focus();
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();

}
}

//增加使用vconsole
let vConsole = new Vconsole()
Vue.use(vConsole);

router.beforeEach((to,from,next)=>{
    next();
})
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
