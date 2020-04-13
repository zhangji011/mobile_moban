<template>
	<div class="tabbar">
		<nav-header :text="'我的'" :iconshow="false"></nav-header>
		<header>
			<div class="header">
				<div class="headr_icon">
					<img v-if="!imgurl" src="../../assets/images/peope5.png" alt="头像" />
					<img v-else :src="imgurl" alt="头像" />
				</div>
				<div class="user_info">
					<div class="user_name overflow_hide">王**</div>
					<div class="real_name">已实名</div>
					<div class="pos_right" @click="goPage('/myinformation')">
						<div class="right_icon"></div>
					</div>
				</div>
			</div>
		</header>
		<section>
			<ul class="nav_ul">
				<li class="nav_li" @click="goPage('systemsetup')">
					<div class="title">系统设置</div>
					<div class="icon"></div>
				</li>
				<li class="nav_li" @click="goAbout('mineAbout')">
					<div class="title">关于我的丰城</div>
					<div class="version">版本v1.0</div>
					<div class="icon"></div>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	var _this;
	import navHeader from '../../components/header/navHeader.vue';
	import {postAction,getAction} from '../../service/manage.js';
	import {Toast} from 'vant';
	export default{
		data(){
			return{}
		},
		components:{navHeader},
		mounted(){
			_this=this;
		},
		computed:{
			imgurl(){ //获取头像地址
				return this.$store.getters.imageUrl
			}
		},
		methods: {
			goPage(page){
				_this.$router.push({
					path:page
				      });
			},
			goAbout(page) {
				this.$router.push({
					path: page
				})
			}
		},
	}
</script>

<style lang="scss" scoped="scoped">
	.header{
		width: 100%;
		height: 5rem;
		background-color: #4f87ed;
		display: flex;
		padding: 0 2rem 1rem 2rem;
		.headr_icon{
			width: 5rem;
			height: 100%;
			position:relative;
			display: flex;
			align-items: center;
			justify-content: center;
			img{
				width: 3rem;
				height: 3rem;
				border-radius:50%;
				border: 1px solid #fff;
			}
		}
		.user_info{
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			height: 100%;
			color: #fff;
			font-size: 0.875rem;
			position: relative;
			padding-right: 3rem;
			.user_name{
				line-height: 1.7rem;
			}
			.real_name{
				width: 3rem;
				font-size: 0.7rem;
				line-height: 1.2rem;
				border: 1px solid #fff;
				border-radius: 3px;
				text-align: center;
			}
			.pos_right{
				width: 3rem;
				height: 100%;
				position: absolute;
				top:0;
				right: 0;
				z-index: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				padding-top: 0.4rem;
				.right_icon{
					width: 0.8rem;
					height: 0.8rem;
					border-top: 2px solid #fff;
					border-right: 2px solid #fff;
					transform: rotate(45deg);
					margin-top: -0.4rem;
				}
			}
		}
	}
	.nav_ul{
		width: 100%;
		height: 3rem;
		.nav_li{
			width: 100%;
			height: 100%;
			padding: 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 0.875rem;
			border-bottom: 1px solid #eee;
			.title{}
			.version {
				margin-left: 12rem;
				color: rgba($color: #000000, $alpha: .5);
			}
			.icon{
				width: 0.7rem;
				height: 0.7em;
				border-top: 2px solid #c8c5c5;
				border-right: 2px solid #c8c5c5;
				transform: rotate(45deg);
			}
		}
	}
</style>
