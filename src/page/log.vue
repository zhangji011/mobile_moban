<template>
    <div class="container">
      <div class="logo">
        <img src="../assets/images/store.png" alt="">
        <p class="asd">丰城一码通</p>
      </div>
      <div style="width:100%;height: 8.5rem;"></div>
      <ul class="formCom form-login form-mini">
        <li class="icon-clear">
          <!-- label -->
		  <!-- 哈哈或加速度快 -->
            <img src="../assets/images/store.png" alt="" style="margin-bottom: 0.4rem;">
            <input type="tel" class="needsclick" placeholder="请输入手机号" onkeyup="this.value=this.value.replace(/\s+/g,'')" oninput="if(value.length>11)value=value.slice(0,11)"
              v-model.number='name'>
          <!-- </label> -->
        </li>
    
        <li class="icon-clear">
          <!-- <label> -->
            <img src="../assets/images/store.png" alt="" style="margin-bottom: 0.5rem;">
            <input type='password' class="needsclick" placeholder="请输入密码" onkeyup="this.value=this.value.replace(/\s+/g,'')" v-model.trim='pwd'>
          <!-- </label> -->
        </li>
    
      </ul>
      <div class="forgetWarp">
        <span class="fr col6" @click="$router.push('/reg')">账号注册</span>
      </div>
      <div class="btnWarp">
        <span class="subBtn" @click='logIn'>登录</span>
      </div>
    </div>
</template>

<script>
	let _this = null;
	import {postAction} from '../service/manage.js';
	import scroll from '../components/scroll/scroll.vue';
	import { Toast } from 'vant';
	import {mapGetters,mapMutations} from 'vuex';
	import Bus from '../utils/bus.js';
  export default {
    data() {
      return {
        name: '',
        pwd: '',
      }
    },
	components:{scroll},
	mounted() {
		_this=this;
	},
	computed:{
	},
    methods: {
		...mapMutations(['setUserInfo']),
      logIn() {
        let checkPhone = /^[1][3456789][0-9]{9}$/;
        let checkPwdOne = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-zA-Z]|[0-9]){6,}$/;
			
			Toast.loading({
				message: '正在登录...',
				forbidClick: true,
				duration: 0
			});
			postAction('doLogin',{
			  "username": this.name,
              "password": this.pwd}).then(res=>{
				  console.log(res)
				  Toast.clear();
				   if (res.code === "203") {
				      setTimeout(function() {
				        Toast('登录成功')
				      }, 500);
					  this.setUserInfo(res.data); //存放用户登录信息
					  Bus.$emit('activeIde'); //处理，退出登陆后再次进入首页，tabbar组件没有重置数据
				      this.$router.push({
				        path: `/index`
				      });
				    } else {
				      setTimeout(function() {
				        Toast(res.message)
				      }, 500);
				    }
			  }
			  );
        // }
      }
	}
  }
</script>

<style lang="scss" scoped>
  .list-wrapper{
	  position: absolute;
	  top: 5rem;
	  bottom: 0;
	  left: 0;
	  right: 0;
  }
  .container {
    overflow: hidden;
    width: 100%;
    min-height: 100%;
  }
  
  .logo {
    text-align: center;
    margin-top: 2.5rem;
  
    p {
      margin-top: 0.8rem;
      font-size: 1.15rem;
      color: #000;
    }
  }
  
  .s_1 {
	width: 100%;
	height: 3.125rem;
    background: #4f87ed;
    position: sticky;
    z-index: 100000000;
    top: 0;
    left: 0;
  
    .l {
      height: 100%;
      line-height: 3.125rem;
      font-size: 1rem;
      font-family: PingFangSC-Regular;
      color: #fff;
      text-align: center;
    }
  
    .t {
      color: #6c6c6c;
      font-size: 0.9375rem;
      height: 3.125rem;
      position: relative;
      float: left;
      text-align: left;
      background-image: url(/static/img/back.png);
      background-repeat: no-repeat;
      background-position: 0.375rem 50%;
      background-size: 1.1rem;
    }
  }
  
  .icon-clear {
    border-bottom: 1px solid #ddd;
  }
  
  .formCom {
    background: #fff;
  }
  
  .formCom li {
    width: 70%;
    color: #333;
    margin: 0 auto;
    font-size: 0.9375rem;
    height: 2.5rem;
    // border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    }
  
  // .formCom li:last-child {
  //   border-bottom: 1px solid #e5e5e5; }
  .formCom li:after {
    display: block;
    font-family: 'icons';
    color: #ccc;
    font-style: normal;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
  }
  
  .formCom label {
    display: block;
    padding-left: 0.5rem;
  }
  
  .formCom input,
  .formCom .input {
    height: 1.275rem;
    font-size: 0.875rem;
    box-sizing:content-box;
    line-height: 1.275rem;
    width:100%;
    padding-left: 0.5rem;
    background: transparent;
    // position: absolute;
    // left: 3rem;
    // top: 0;
    z-index: 2;
  }
  
  .formCom p {
    position: absolute;
    top: 0;
    width: 100%;
    padding-left: 27.5%;
  }
  
  .formCom select {
    font-size: 0.8125rem;
    height: 2.375rem;
    width: 100%;
    padding-left: 27.5%;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    opacity: 0;
  }
  
  .formCom img {
    width: 1.8rem;
    height: 1.8rem;
  }
  
  .formCom option {
    color: #666;
  }
  
  .btnWarp {
    margin: 1.625rem 0.625rem 0 0.625rem;
  
    .subBtn {
      display: block;
      margin: 0 auto;
      width: 80%;
      color: #fff;
      text-align: center;
      font-size: 0.9375rem;
      line-height: 2.4rem;
      background-color: #5592fa;
      -webkit-border-radius: 2.3125rem;
      border-radius: 2.3125rem;
      // border: .0625rem solid #00c1de;
      cursor: pointer;
    }
  }
  
  .forgetWarp {
    font-size: 0.8125rem;
    line-height: 2.5rem;
    margin: 0.2rem 3.4rem 0 1.7rem;
    overflow: hidden;
  
    input {
      display: inline-block;
      position: relative;
      top: 0.0625rem;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 0.9375rem;
      height: 0.9375rem;
      background-color: #fff;
      z-index: 10;
    }
  
    .col6 {
      color: #bbb;
    }
  
    .fr {
      float: right;
    }
  }
  
  .nullHeight {
    height: .5625rem;
    background: #ededed;
  }
  
  input {
    outline: none;
  }
</style>
