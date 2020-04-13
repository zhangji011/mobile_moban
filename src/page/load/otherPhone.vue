<template>
	<div class="items">
		<nav-header :text="'绑定手机号'"></nav-header>
        <div class="main">
            <p class="desc">为了防止账号丢失以及方便找回，请绑定手机号码后再使用</p>
            <div class="phone">
                <div class="phoneL">+86</div>
                <div class="iconfont icons">| &#xe61b;</div>
                <input
                    type="tel"
                    class="input" 
                    v-model="value" 
                    placeholder="请输入手机号"
                    onkeyup="this.value=this.value.replace(/\s+/g,'')" 
                    oninput="if(value.length>11)value=value.slice(0,11)"
                />
            </div>
            <div class="captcha">
                <input
                    type="tel"
                    class="input" 
                    v-model="captchaValue" 
                    placeholder="请输入手机号"
                    onkeyup="this.value=this.value.replace(/\s+/g,'')" 
                    oninput="if(value.length>11)value=value.slice(0,11)"
                />
                <div class="send" @click="sendClick">获取验证码</div>
            </div>
            <van-button 
                type="primary" 
                block 
                color="#4f87ed" 
                style="margin-top: 2rem"
                @click="handleClick"
            >完成</van-button>
        </div>
	</div>
</template>

<script>
    import navHeader from '../../components/header/navHeader.vue';
    import Vue from 'vue';
    import { Button } from 'vant';

    Vue.use(Button);
	export default {
		name: 'otherPhone',
		data() {
			return {
                value: '',
                captchaValue: '',
                msg: 1
            }
		},
		components: {
			navHeader
		},
		methods: {
			handleClick () {
                console.log('click')
                if(this.msg == 1) {
                    this.$router.push('/sendSms')
                }else {
                    this.$$router.push('/')
                }
            },
            weixinOnload() {
                console.log('weixin')
                this.$router.push('/verifyPhone')
            },
            qqOnload() {
                console.log('qq')
            },
            sendClick() {
                console.log('sendClick')
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
            .captcha {
                height: 2.9rem;
                margin-top: 1rem;
                background: #f2f2f2;
                display: flex;
                line-height: 2.9rem;
                .input {
                    width: 12.8rem;
                    background: rgba($color: #888181, $alpha: -1.5);
                    font-weight: 400;
                    padding-left: 1rem;
                }
                .send {
                    width: 5.9rem;
                    color: #4f87ed;
                    font-size: .9rem;
                    font-weight: 600;
                }
            }
            .desc {
                color: rgba($color: #000000, $alpha: .5);
                font-size: .8rem;
                margin-top: 1.3rem;
            }
        }
    }
</style>
