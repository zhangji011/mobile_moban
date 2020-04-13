<template>
  <div id="app">
	  <transition name="vux-pop-in" mode="out-in">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="router-v"></router-view>
    </keep-alive>
		</transition>
	<transition name="vux-pop-in" mode="out-in">
    <router-view v-if="!$route.meta.keepAlive" class="router-v"></router-view>
	</transition>
	<tabbar v-show="tabbarShow"></tabbar>
  </div>
</template>

<script>
	import tabbar from './components/tabbar/tabbar.vue';
  export default {
    name: 'app',
    components: {tabbar},
	 watch:{
    $route(to,from){
      //判断是否显示tabbar
      if(to.path == '/minehome' || to.path == '/index' || to.path == '/infoHome'){
        this.$store.commit('updateTabbarShow',true);
      }else{
        this.$store.commit('updateTabbarShow',false);
      }

    }
  },
  computed: {
    tabbarShow(){
      return this.$store.getters.getTabbarShow
    }
  },
  created(){
		 //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
	}
  }

</script>

<style lang="scss">
  @import './assets/common/css/theme.scss';
  .vux-pop-out-enter-active,
  .vux-pop-in-enter-active {
    will-change: transform, opacity;
    transition: all 0.2s ease;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: visible;
    -webkit-backface-visibility: visible;
    perspective: 1000;
  }
  
  .vux-pop-out-enter {
    opacity: 0.5;
    transform: translate3d(-100px, 0, 0);
  }
  
  .vux-pop-out-leave-active {
    opacity: 0.5;
    transform: translate3d(100px, 0, 0);
  }
  
  .vux-pop-in-enter {
    opacity: 0.5;
    transform: translate3d(50px, 0, 0);
  }
  
  .vux-pop-in-leave-active {
    opacity: 0.5;
    transform: translate3d(-50px, 0, 0);
  }
  .router-v {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
  }
</style>
