<template>
	<div class="items">
		<nav-header :text="'登录'" :iconshow="false"></nav-header>
        <div class="main">
            <p class="prompt">登录开启便捷生活</p>
            <div class="phone">
                <div class="phoneL">+86</div>
                <div class="iconfont icons">| &#xe61b;</div>
                <input
                    type="tel"
                    class="input"
                    v-model="value"
                    placeholder="请输入手机号"
                    onkeyup="this.value=this.value.replace(/\D/g,'')" 
                    onafterpaste="this.value=this.value.replace(/\D/g,'')"
                    oninput="if(value.length>11)value=value.slice(0,11)"
                />
            </div>
            <p class="desc">未注册的手机号通过验证后将自动注册</p>
            <van-button 
                type="primary" 
                block 
                color="#4f87ed" 
                style="margin-top: 1rem"
                @click="handleClick"
            >获取短信验证码</van-button>
        </div>
        <div class="footer">
            <div class="border">
                <div class="borderL"></div>
                <div class="descs">第三方登录</div>
                <div class="borderR"></div>
            </div>
            <div class="onload">
                <svg class="icon weixin" aria-hidden="true">
                    <use xlink:href="#icon-weixin" @click="weixinOnload"></use>
                </svg>
                <svg class="icon qq" aria-hidden="true">
                    <use xlink:href="#icon-qq" @click="qqOnload"></use>
                </svg>
            </div>
        </div>
	</div>
</template>

<script>
    import navHeader from '../components/header/navHeader.vue';
    import Vue from 'vue';
    import { Button } from 'vant';

    Vue.use(Button);
	export default {
		name: 'mineAbout',
		data() {
			return {
                value: '',
            }
		},
		components: {
			navHeader
		},
		methods: {
			handleClick () {
                console.log('click')
                this.$router.push('/sendSms')
            },
            weixinOnload() {
                console.log('weixin')
                this.$router.push('/verifyPhone')
            },
            qqOnload() {
                console.log('qq')
            }
		}
	}
</script>

<style lang="scss" scoped="scoped">
    .items {
        width: 100%;
        position: relative;
        .main {
            width: 80%;
            margin: 0 auto;
            margin-top: 2rem;
            .prompt {
                font-size: 1.3rem;
            }
            .phone {
                height: 2.9rem;
                margin-top: 1.7rem;
                background: #f2f2f2;
                display: flex;
                line-height: 2.9rem;
                .phoneL {
                    margin-left: 1rem;
                    font-size: .8rem;
                }
                .icons {
                    margin: 0 .5rem 0 1rem;
                    font-size: .9rem;
                }
                .input {
                    width: 12.8rem;
                    background: rgba($color: #888181, $alpha: -1.5);
                }
            }
            .desc {
                color: rgba($color: #000000, $alpha: .5);
                font-size: .5rem;
                margin-top: 1.3rem;
            }
        }
        .footer {
            width: 100%;
            height: 8rem;
            bottom: 0;
            position: absolute;
            .border {
                display: flex;
                overflow: hidden;
                .borderL {
                    border-top: 1px solid rgba($color: #000000, $alpha: .5);
                    flex: 1;
                    margin-top: .4rem;
                }
                .descs {
                    width: 4rem;
                    font-size: .7rem;
                    color: rgba($color: #000000, $alpha: .5);
                }
                .borderR {
                    border-top: 1px solid rgba($color: #000000, $alpha: .5);
                    flex: 1;
                    margin-top: .4rem;
                }
            }
            .onload {
                width: 50%;
                margin: 0 auto;
                text-align: center;
                font-size: 2rem;
                margin-top: 2rem;
                overflow: hidden;
                .weixin {
                    float: left;
                }
                .qq {
                    float: right;
                }
            }
        }
    }
</style>