<template>
	<div class="my_information">
		<nav-header :text="'我的资料'"></nav-header>
		<div class="container">
			<div class="list">
				<div>头像</div>
				<van-uploader :after-read="handleFileChange" :before-read="beforeRead" result-type="file" accept=".png, .jpg, .jpeg">
					<img v-if="!imgurl" src="../../assets/images/peope5.png" alt="头像" />
					<img v-else :src="imgurl" alt="头像" />
				</van-uploader>
			</div>
			<div class="list">
				<div>真实姓名</div>
				<div>王富贵</div>
			</div>
			<div class="list">
				<div>身份认证</div>
				<div>已实名</div>
			</div>
		</div>
	</div>
</template>

<script>
	let _this = null;
	import Vue from 'vue'
	import navHeader from '../../components/header/navHeader.vue';
	import {postAction} from '../../service/manage.js';
	import {mapMutations} from 'vuex';
	import {
		Uploader,Toast
	} from 'vant';
	Vue.use(Uploader);
	export default {
		name: 'myInformation',
		data() {
			return {}
		},
		components: {
			navHeader
		},
		mounted(){_this=this;},
		computed: {
			imgurl() {
				return this.$store.getters.imageUrl
			}
		},
		methods: {
			...mapMutations(['updateUserInfoImg']),
			handleFileChange(file) {
				let param = new FormData();
				param.append('file',file.file)
				param.append('guid',_this.$store.getters.userInfo.guid);
				Toast.loading({
					message: '正在上传头像...',
					forbidClick: true,
					duration: 0
				});
				postAction('user/updateUserPic',param).then(res=>{
					Toast.clear();
					if(res.code==200){
						_this.updateUserInfoImg(res.data.imageUrl);
					}else{
						Toast('上传失败');
					}
				});
			},
			beforeRead(file){
				console.log(file);
				return true
				// console.log(file);
				// console.log(detail);
			}
		},
	}
</script>

<style lang="scss" scoped="scoped">
	.container {
		padding: 0 1rem;
	}

	.list {
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #eee;
		font-size: 0.875rem;
		img {
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
		}
	}
</style>
