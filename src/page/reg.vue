<template>
	<div class="container">
		<nav-header :text="'注册'"></nav-header>
		<ul class="formCom form-login">
			<li>
				<label>
					<img src="../assets/images/store.png" alt="">
					<input type="number" class="needsclick" placeholder="请输入手机号码" oninput="if(value.length>11)value=value.slice(0,11)"
					 v-model.number='phone' />
				</label>
			</li>
			<li>
				<label>
					<img src="../assets/images/store.png" alt="">
					<input type="password" class="needsclick" placeholder="请输入密码" onkeyup="this.value=this.value.replace(/\s+/g,'')"
					 v-model.trim='pwdOne'>
				</label>
			</li>
			<li>
				<label>
					<img src="../assets/images/store.png" alt="">
					<input type="password" class="needsclick" placeholder="请再次输入密码" onkeyup="this.value=this.value.replace(/\s+/g,'')"
					 v-model.trim='pwdTwo'>
				</label>
			</li>
		</ul>
		<div class="btnWarp">
			<span class="subBtn" @click='goReg'>提交</span>
		</div>
		<div class="footer">
			<div>密码创建规则：</div>
			<span>1.密码长度至少为6位；<br>
				2.密码为字母、数字、符号3者中2个或2个以上组合；
			</span>
		</div>
	</div>
</template>
<script>
	let _this = null;
	import navHeader from "../components/header/navHeader.vue";
	import {
		Toast
	} from 'vant';
	import {
		postAction
	} from '../service/manage.js';
	export default {
		data() {
			return {
				phone: '',
				pwdOne: '',
				pwdTwo: '',
			}
		},
		mounted() {
			_this = this;
		},
		components: {
			navHeader
		},
		methods: {
			goReg() {
				let checkPhone = /^[1][3578][0-9]{9}$/;
				let checkPwdOne = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-zA-Z]|[0-9]){6,}$/;
				//先做一些简单的判断再提交ajax
				if (checkPhone.test(this.phone) === false) Toast('手机格式不正确', 1000);
				else if (checkPwdOne.test(this.pwdOne) === false) Toast('密码格式不正确');
				else if (this.pwdOne !== this.pwdTwo) Toast('二次密码输入不一致');
				else {
					Toast.loading({
						message: '正在注册...',
						forbidClick: true,
						duration: 0
					});
					postAction('user/register',{
						data:{
								"account":this.phone,
								"password": this.pwdOne
							},
							info:{
								"operation": "ios",
								"sign": "zxcvbnm",
								"source": "localhost",
								"timestamp": "20200227",
								"version": "v1.0.0"
							}
					}).then(res => {
						Toast.clear();
						if (res.code === "200") {
							Toast('注册成功');
							setTimeout(function() {
								_this.$router.go(-1);
							}, 1000)
						} else {
							Toast(res.message)
						}
					});
				}
			},
			goBack() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		overflow: hidden;
		min-height: 100%;
		background: #f6f7f8;
	}

	.formCom {
		// padding-left: 0.625rem;
		background: #fff;
	}

	.formCom li {
		color: #333;
		font-size: 0.9375rem;
		height: 3rem;
		line-height: 3rem;
		border-bottom: 1px solid #e5e5e5;
		position: relative;
		overflow: hidden;
		cursor: pointer;
	}

	.formCom li:last-child {
		border-bottom: 1px solid #e5e5e5;
	}

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
		padding-left: 1.5rem;
	}

	.formCom input,
	.formCom .input {
		font-size: 0.875rem;
		line-height: 1.6rem;
		margin-top: 0.65rem;
		width: 72%;
		background: transparent;
		position: absolute;
		left: 4rem;
		top: 0;
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
		width: 1.375rem;
		height: 1.375rem;
		position: absolute;
		top: .75rem;
	}

	.formCom option {
		color: #666;
	}


	.btnWarp {
		margin: 2.625rem 0.625rem 0 0.625rem;

		.subBtn {
			display: block;
			margin: 0 auto;
			width: 70%;
			color: #fff;
			text-align: center;
			font-size: 0.9375rem;
			line-height: 2.6rem;
			background-color: #5592fa;
			-webkit-border-radius: 0.3125rem;
			border-radius: 0.3125rem;
		}
	}

	.footer {
		font-size: 0.8rem;
		font-family: PingFangSC-Regular;
		padding-left: 1.5rem;
		padding-top: 2rem;

		div {
			padding-bottom: 0.375rem;
		}

		span {
			color: #c7c7c7;
			line-height: 1.2rem;
		}
	}
</style>
