
## 安装

#### 注意：由于涉及大量的 ES6/7 等新属性，node 需要 6.0 以上版本 


### 本地调试模式

```
npm start

```
### 生产模式(部署)

```
npm run build

```


# 项目布局

```

├── build                                       --webpack配置文件
├── config                                      --项目打包路径
│   │   ├── dev.env.js                          --本地开发环境配置
│   │   ├── prod.env.js                         --生产模式环境配置
│   │   └── index.js                            --根文件
├── dist                                        --打包后上线项目文,在服务器即可正常访问
├── src                                         --源码目录
│   ├── assets                                  --公共资源文件
│   │   ├── common                          	--存放静态资源js/css
│   │   ├── images                         	 --存放静态资源图片
│   ├── components                              --组件
│   │   ├── scroll                              --页面滚动组件配置
│   ├── page									
│   │   ├── log                                 --登录页面
│   ├── plugins                                 --引用的插件
│   │   └── rem.js                         	 --rem相关配置
│   ├── router
│   │   └── index.js                            --路由配置
│   ├── service                                 
│   │   └── manage.js                          --获取数据的统一调配文件,axios请求地址
│   ├── store                                   --vuex的状态管理
│   │   ├── modules                             
│   │   ├── common.js                       	--公共数据存放 例：用户信息
│   │   ├── getter.js                           --全局计算属性数据
│   │   └── index.js                            --初始化全局Vuex
│   └── utils
│	   ├── bus.js 							 --组件跨级通信
│       ├── axios.js                            --axios拦截器/公共请求部分设置
│       └── mixin.js                            --公用混合工具类
│   ├── App.vue                                 --页面入口文件
│   ├── main.js                                 --程序入口文件，加载各种公共组件
│   └── static                                  --静态资源文件夹
├── favicon.ico                                 --图标
├── index.html                                  --入口html文件
└── package.json                                --项目描述文件
```

# 当前页面
>>资讯类
- 用户登录页面/log

# 使用技术
- vant-https://youzan.github.io/vant/#/zh-CN/
- better-scroll-http://ustbhuangyi.github.io/better-scroll/doc/api.html
- vconsole-https://www.npmjs.com/package/vconsole




