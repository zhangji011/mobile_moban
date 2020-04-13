import 'babel-polyfill'
import Vue from 'vue'
import Router from 'vue-router'

/* common */
const log = () => import('page/log');  //登录
const index = () => import('page/home');  //首页
const reg = () => import('page/reg'); //注册

const phoneLogin = () => import('page/phoneLogin') // 手机登陆
const sendSms = () => import('page/load/sendSms') // 发送验证码
const verifyPhone = () => import('page/load/verifyPhone') // 验证手机号
const otherPhone = () => import('page/load/otherPhone') // 绑定手机号
const conflictRemind = () => import('page/load/conflictRemind') // 手机号冲突提醒

// 我的模块页面路由  
const mineHome = () => import('page/mine/mineHome'); //我的首页  
const myInformation = () => import('page/mine/myInformation'); //我的资料  
const systemSetup = () => import('page/mine/systemSetup'); //系统设置  
const mineAbout = () => import('page/mine/mineAbout'); // 关于我们

// 资讯
const infoHome = () => import('page/info/infoHome');

const appRouter = {
        // mode: 'history',
        routes: [{
                path: '',
                redirect: '/phoneLogin'
            },
            //common
            {
                path: '/log',
                name: 'log',
                component: log,
                meta: { keepAlive: false }
            },
			{
			    path: '/index',
			    name: 'index',
			    component: index,
			    meta: { keepAlive: false }
			},
			{
			    path: '/reg',
			    name: 'reg',
			    component: reg,
			    meta: { keepAlive: false }
			},
			{
			    path: '/phoneLogin',
			    name: 'phoneLogin',
			    component: phoneLogin,
			    meta: { keepAlive: false }
			},
			{
			    path: '/sendSms',
			    name: 'sendSms',
			    component: sendSms,
			    meta: { keepAlive: false }
			},
			{
			    path: '/verifyPhone',
			    name: 'verifyPhone',
			    component: verifyPhone,
			    meta: { keepAlive: false }
			},
			{
			    path: '/otherPhone',
			    name: 'otherPhone',
			    component: otherPhone,
			    meta: { keepAlive: false }
			},
			{
			    path: '/conflictRemind',
			    name: 'conflictRemind',
			    component: conflictRemind,
			    meta: { keepAlive: false }
			},
			// 资讯
			{
				path: '/infoHome',
				name: 'infoHome',
				component: infoHome,
				meta: { keepAlive: false }
			},
			// 我的页面模块路由
			{
			    path: '/minehome',
			    name: 'minehome',
			    component: mineHome,
			    meta: { keepAlive: false }
			},
			{
			    path: '/myinformation',
			    name: 'myInformation',
			    component: myInformation,
			    meta: { keepAlive: false }
			},
			{
			    path: '/systemsetup',
			    name: 'systemSetup',
			    component: systemSetup,
			    meta: { keepAlive: false }
			},
			{
			    path: '/mineAbout',
			    name: 'mineAbout',
			    component: mineAbout,
			    meta: { keepAlive: false }
			}
        ]
    }
Vue.use(Router)


export default new Router(appRouter);