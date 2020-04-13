<template>
		<van-tabbar v-model="active">
  <van-tabbar-item v-for="(item,ide) in tabbatList" :to="item.path" :key="ide" safe-area-inset-bottom="true">
    <span>{{item.title}}</span>
      <template #icon="props">
        <img :src="props.active ? item.normalIcon : item.activeIcon"/>
      </template>
  </van-tabbar-item>
</van-tabbar>
</template>

<script>
	import Vue from 'vue';
	import Bus from '../../utils/bus.js';
	import {Tabbar, TabbarItem } from 'vant';
	Vue.use(Tabbar).use(TabbarItem);
	export default{
		name:'tabbar',
		data(){
			return{
				active:0,
				tabbatList:[
					{
						title:'城市服务',
						normalIcon:require('../../assets/images/user.png'),
						activeIcon:require('../../assets/images/user1.png'),
						path:'/index'
					},
					{
						title:'资讯',
						normalIcon:require('../../assets/images/user.png'),
						activeIcon:require('../../assets/images/user1.png'),
						path:'/infoHome'
					},
					{
						title:'应用',
						normalIcon:require('../../assets/images/user.png'),
						activeIcon:require('../../assets/images/user1.png'),
						path:'/index'
					},
					{
						title:'我的',
						normalIcon:require('../../assets/images/store.png'),
						activeIcon:require('../../assets/images/user1.png'),
						path:'/minehome'
					}
				]
			}
		},
		mounted(){
			 Bus.$on('activeIde', (data) => { //退出登录后重新进入首页  重置
				this.active = 0;
			})
		},
		methods:{
		}
	}
</script>

<style lang="scss" scoped="scoped">
</style>
