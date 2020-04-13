<template>
    <div class="home">
		<nav-header :text="'首页'" :iconshow="false" ></nav-header>
		<scroll :pullUpLoad="true" :pullDownRefresh="true" :bounce="true">
			<div>
				<!-- <div class="banner">
				    <img src="../assets/images/store.png" alt="">
				</div> -->
                <van-swipe class="banner" :autoplay="4000" indicator-color="white">
                    <van-swipe-item v-for="item of images" :key="item.key">
                        <img v-lazy="item" />
                    </van-swipe-item>
                </van-swipe>
				<div class="el"></div>
				<!-- 健康 -->
				<div class="health">
				    <div class="health_head">
				        <div class="health_head_left">
				            <span class="height"></span>
				            <div>健康</div>
				        </div>
				        <div class="health_head_right">
				            <div>更多</div>
				            <img src="../assets/images/store.png" alt="">
				        </div>
				    </div>
				    <div class="health_conent">
				        <div class="health_left">
				            <div class="health_left_top">
				                <div class="introduce">
				                    <p>预约挂号</p>
				                    <p class="introduce_color">专家名医预约</p>
				                </div>
				                <div class="introduce_img">
				                </div>
				            </div>
				            <div class="health_left_bottom">
				                <div class="introduce">
				                    <p>疫情防控服务</p>
				                    <p class="introduce_color">疫情防控</p>
									<div class="yuan"></div>
				                </div>
				                <div class="introduce_img">
				                </div>
				            </div>
				        </div>
				        <div class="health_right">
				            <p class="doctor">医院服务</p>
				            <div class="introduce_img_img"></div>
				            <p class="introduce_color1">医保在线支付</p>
				        </div>
				    </div>
				</div>
				<div class="el"></div>
				<!-- 政务 -->
				<div class="health" v-for="item in 3" :key="item.key">
				    <div class="health_head">
				        <div class="health_head_left">
				            <span class="height" style="background-color: red;"></span>
				            <div>政务</div>
				        </div>
				        <div class="health_head_right">
				            <div>更多</div>
				            <img src="../assets/images/store.png" alt="">
				        </div>
				    </div>
				    <div class="health_conent">
				        <div class="health_left">
				            <div class="health_left_top">
				                <div class="introduce">
				                    <p>政务服务</p>
				                    <p class="introduce_color">专家名医预约</p>
				                </div>
				                <div class="introduce_img">
				                </div>
				            </div>
				            <div class="health_left_bottom">
				                <div class="introduce">
				                    <p>12345热线</p>
				                    <p class="introduce_color">疫情防控</p>
				                </div>
				                <div class="introduce_img">
				                </div>
				            </div>
				        </div>
				        <div class="health_left" style="border-right: none;">
				            <div class="health_left_top">
				                <div class="introduce">
				                    <p>智慧人社</p>
				                    <p class="introduce_color">专家名医预约</p>
				                </div>
				                <div class="introduce_img">
				                </div>
				            </div>
				            <div class="health_left_bottom">
				                <div class="introduce">
				                    <p>企业服务</p>
				                    <p class="introduce_color">疫情防控</p>
				                </div>
				                <div class="introduce_img">
				                </div>
				            </div>
				        </div>
				    </div>
				</div>
			</div>
		</scroll>
    </div>
</template>
<script>
	import scroll from '../components/scroll/scroll.vue';
	// import baidumap from '../components/baidumap/baidumap.vue';
	import {mapGetters,mapMutations} from 'vuex';
    import navHeader from '../components/header/navHeader.vue';
    import Vue from 'vue';
    import { Swipe,SwipeItem } from 'vant'
    import { Lazyload } from 'vant';

    Vue.use(Swipe);
    Vue.use(SwipeItem);
    Vue.use(Lazyload);
export default {
    data() {
        return {
            uid:''  ,//用户ID
            mapshow:false,
            images: [
                require('../assets/images/store.png'),
                require('../assets/images/store.png'),
                require('../assets/images/store.png'),
                require('../assets/images/store.png')
            ]
        }
    },
	computed:{
		...mapGetters(['token'])
	},
	components:{scroll,navHeader},
    mounted(){
		console.log("token:"+this.token);
    },
    methods: {
    },
}
</script>
<style lang="scss" scoped>
	.list-wrapper{
		  position: absolute;
		  top: 3.125rem;
		  bottom: 50px;
		  left: 0;
		  right: 0;
	}
.home {
    overflow: hidden;
    min-height: 100%;
}

.s_1 {
	width: 100%;
	height: 3.125rem;
	ul{
		width: 100%;
		height: 100%;
		display: flex;
		color: #fff;
		background-color: #5b5bce;
		justify-content: space-between;
		li{
			width: 4rem;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
.banner {
    width: 100%;
    height: 9rem;
    img {
        width: 100%;
        height: 100%;
    }
}
.el {
    width: 100%;
    height: 0.8rem;
    background-color: #eee;
}
.health {
    .health_head {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0.7rem;
        border-bottom: 0.05rem solid #ddd;
        .health_head_left {
            flex: 1;
            position: relative;
            div {
                font-size: 0.875rem;
                font-weight: 900;
                margin-left: 0.85rem;
            }
            .height {
                display: inline-block;
                width: 0.2rem;
                height: 1rem;
                background-color: greenyellow;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
        .health_head_right {
            flex: 1;
            position: relative;
            div {
                font-size: 0.875rem;
                color: #666;
                text-align: right;
                margin-right: 1.4rem;
            }
            img {
                width: 1rem;
                height: 1rem;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 0;
            }
        }
    }
    .health_conent {
        display: flex;
        align-items: center;
        border-bottom: 0.05rem solid #ddd;
        .health_left {
            flex: 1;
            border-right: 0.05rem solid #ddd;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .health_left_top {
                width: 100%;
                flex: 1;
                padding: 0.7rem;
                border-bottom: 0.05rem solid #ddd;
                position: relative;
                p {
                    height: 1.3rem;
                    font-size: 0.875rem;
                    line-height: 1.3rem;
                    font-weight: 900;
                }
                .introduce_color {
                    color: #666;
                    font-weight: 400;
                    margin-top: 0.4rem;
                }
                .introduce_img {
                    width: 2.5rem;
                    height: 2.5rem;
                    background-color: pink;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 10%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .health_left_bottom{
                width: 100%;
                flex: 1;
                padding: 0.7rem;
                position: relative;
                p {
                    height: 1.3rem;
                    line-height: 1.3rem;
                    font-size: 0.875rem;
                    font-weight: 900;
                }
                .yuan{
                  position: absolute;
                  right: 0.4rem;
                  top: 0.4rem;
                  width: 0.5rem;
                  height: 0.5rem;
                  border-radius: 50%;
                  background-color: red;
                }
                .introduce_color {
                    color: #666;
                    font-weight: 400;
                    margin-top: 0.4rem;
                }
                .introduce_img {
                    width: 2.5rem;
                    height: 2.5rem;
                    background-color: pink;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 10%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .health_right {
            flex: 1;
            position: relative;
            .doctor {
              height: 1.3rem;
                font-size: 0.875rem;
                font-weight: 900;
                text-align: center;
                line-height: 1.3rem;
            }
            .introduce_color1 {
                color: #666;
                font-weight: 400;
                margin-top: 0.7rem;
                font-size: 0.875rem;
                text-align: center;
            }
            .introduce_img_img {
                width: 2.5rem;
                height: 2.5rem;
                background-color: pink;
                border-radius: 50%;
                margin: 0 auto;
                margin-top: 0.7rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
