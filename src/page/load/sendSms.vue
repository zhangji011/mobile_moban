<template>
	<div class="items">
		<nav-header :text="'登录'"></nav-header>
        <div class="main">
            <p class="prompt">填写验证码</p>
            <p class="desc">验证码已通过短信发送至+86 13999999999</p>
            <div class="phone">
                <input
                    type="tel"
                    class="input" 
                    v-model="value" 
                    placeholder="请输入收到的验证码"
                    onkeyup="this.value=this.value.replace(/\s+/g,'')" 
                    oninput="if(value.length>11)value=value.slice(0,11)"
                />
            </div>
            <van-button 
                type="primary" 
                block 
                color="#4f87ed" 
                style="margin-top: 1rem"
                @click="onload"
            >登录</van-button>
        </div>
        <!-- <div class="footer">
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
        </div> -->
	</div>
</template>

<script>
    import navHeader from '../../components/header/navHeader.vue';
    import Vue from 'vue';
    import { Button } from 'vant';

    Vue.use(Button);
	export default {
		name: 'sendSms',
		data() {
			return {
                value: '',
            }
		},
		components: {
			navHeader
		},
		methods: {
			onload() {
                console.log('click')
                this.$router.push('/index')
            },
            weixinOnload() {
                console.log('weixin')
                // this.$router.push('/weixin')
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
                .input {
                    padding-left: 1rem;
                    font-size: .8rem;
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
