<template>
	<div>
		<nav-header :text="'系统设置'"></nav-header>
		<div class="logo_out" @click="exit">退出登录</div>
	</div>
</template>

<script>
	import navHeader from '../../components/header/navHeader.vue';
	import {
		Dialog
	} from 'vant';
	export default {
		name: 'systemSetup',
		data() {
			return {}
		},
		components: {
			navHeader
		},
		methods: {
			exit() {
				Dialog.confirm({
					title: '提示',
					message: '你是否要退出登录'
				}).then(() => {
					this.$store.commit("setUserInfo",{});
					this.$router.push({path:'/log'});
					// on confirm
				}).catch(() => {
					// on cancel
				});
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.logo_out {
		width: 70%;
		height: 3rem;
		text-align: center;
		line-height: 3rem;
		background-color: #f2f2f2;
		position: absolute;
		bottom: 2rem;
		left: 15%;
		border-radius: 5px;
		color: #7f7f7f;
		z-index: 1;
	}
</style>
