<template>
	<div class="nav">
		<div class="left_icon" @click="goBack" v-show="iconshow">
			<img src="../../assets/images/goback.png" alt="返回" />
		</div>
		<div class="text overflow_hide">{{text}}</div>
	</div>
</template>

<script>
	export default{
		name:'navHeader',
		props:{
			text: {
			  type: String,
			  default:''
			},
			iconshow:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.nav{
		width: 100%;
		height: 3rem;
		background-color: #4f87ed;
		position: relative;
		.left_icon{
			position: absolute;
			left: 0;
			top: 0;
			width: 3rem;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			img{
				width: 1.8rem;
				height: 1.8rem;
			}
		}
		.text{
			width: 100%;
			height: 3rem;
			line-height: 3rem;
			font-size: 1rem;
			text-align: center;
			padding: 0 3rem;
			color: #fff;
		}
	}
</style>
