<template>
  <div ref="wrapper" class="list-wrapper">
    <div class="scroll-content">
      <div ref="listWrapper">
        <slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: 'scroll',
  props: {
    probeType: {
      type: Number,
      default: 3
    },
	bounce:{
		type: Boolean,
		default: false
	},
	pullUpLoad:{
		type: Boolean,
		default: false
	},
	listenScroll:{
		type: Boolean,
		default: false  
	},
	pullDownRefresh:{
		type: Boolean,
		default: false
	}
  },
  data() {
    return {

    };
  },
  computed: {
  },
  created() {},
  mounted() {
    var vm=this;
    setTimeout(function(){
      vm.initScroll();
    },50)
  },
  methods: {
    initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      let options = {
        probeType: this.probeType,  //派发scroll滚动事件 1:非实时 2:滚动时 3:滚动时和momentum 滚动动画时
        click: true,  //派发点击事件
        scrollY: true,  //上下滑动
        scrollX: false,  //左右滑动
        scrollbar: false, 
        pullUpLoad: this.pullUpLoad,  //是否开启上拉加载
		pullDownRefresh:{threshold: 50,
        probeType: 3},  //是否开启下拉刷新
        startY: 0,
        mouseWheel: true, //开启滚轮滚动
        useTransition: false,
        bounce: this.bounce,  //开启回弹
        stopPropagation: false,
        preventDefault: true,
		momentumLimitDistance:10,  //只有在屏幕上快速滑动的距离大于 momentumLimitDistance，才能开启 momentum 动画
		swipeTime:1000   ,//设置 momentum 动画的动画时长
		deceleration:0.001   //滚动动量减速越大越快，建议不大于0.01  默认0.001
      };
      this.scroll = new BScroll(this.$refs.wrapper, options);
	  if (this.pullUpLoad) {  //上拉加载
	  	this.scroll.on('pullingUp', () => {
	  		console.log("触发上拉加载")
	  	})
	  }
	  if (this.pullDownRefresh) {  //上拉加载
	  	this.scroll.on('pullingDown', () => {
	  		console.log("触发下拉刷新")
	  	})
	  }
	  if(this.listenScroll){ //滚动监听
		  this.scroll.on('scroll', (pos) => {
		  	console.log(pos)
		  })
	  }
    },
	finishPullUp(){ //解锁上拉加载
		this.scroll.finishPullUp();
	},
	finishPullDown(){ //解锁下拉刷新
		this.scroll.finishPullDown();
	},
	refresh(){  //DOM结构发生变化时 重新计算 better-scroll高度
		this.scroll.refresh();
	}
  }
};
</script>

<style lang="scss">
.list-wrapper {
  width: 100%;
  overflow: hidden;
  background: #fff;

  .scroll-content {
    background: #fff;
  }
 }
</style>
