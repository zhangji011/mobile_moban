<template>
	<div class="items">
		<nav-header :text="'手机绑定冲突提醒'"></nav-header>
        <div class="main">
            <p class="desc">手机号139****9998无法绑定在当前账号，已经绑定在另一账号上了。冲突账号可能是您之前注册的。</p>
            <div class="border"></div>
            <div class="account">
                <div class="avatar">
                    <div class="avatarTitle">当前账号</div>
                    <div class="imgs">
                        <img src="../../assets/images/peope5.png" alt="">
                    </div>
                </div>
                <div class="nickname">昵称: test</div>
            </div>
            <div class="border"></div>
            <div class="account">
                <div class="avatar">
                    <div class="avatarTitle">冲突账号</div>
                    <div class="imgs">
                        <img src="../../assets/images/peope5.png" alt="" v-if="this.secBtn !== '' ? true : false">
                    </div>
                </div>
                <div class="nickname">昵称: {{secBtn}}</div>
            </div>
        </div>
        <div class="footer">
            <div class="descs">通过验证后您可以查看冲突账号信息，并根据提示选择处理方式</div>
            <van-button 
                type="primary" 
                block 
                color="#4f87ed" 
                style="width: 80%;margin: 1.2rem auto 1.2rem auto;"
                @click="todoClick"
            >
                {{this.oneBtn}}
            </van-button>

            <van-button 
                v-if="showBtn"
                type="primary" 
                block 
                color="#f2f2f2" 
                style="width: 80%;margin: 0 auto 1.5rem auto;"
                @click="todoClick"
            >
                <span style="color: black">将手机号绑定至{{this.secBtn}}</span>
            </van-button>
        </div>
                        <!-- 弹框 -->
        <van-popup 
            v-model="show"
            closeable
            :style="{ height: '35%', width: '90%' }"
            :close-on-click-overlay= 'false'
        >
            <ul>
                <li class="title">
                    验证手机号
                </li>
                <li class="descs">
                    已向手机号139****9998发送一条短信验证码
                </li>
                <li class="inputs">
                    <input
                        type="tel"
                        class="input" 
                        v-model="value" 
                        placeholder="请输入验证码"
                        onkeyup="this.value=this.value.replace(/\s+/g,'')" 
                        oninput="if(value.length>11)value=value.slice(0,11)"
                    />
                    | {{word}}
                </li>
                <li>
                    <van-button 
                        type="primary" 
                        block 
                        color="#4f87ed" 
                        style="width: 50%;margin: 1.5rem auto 0 auto;"
                        @click='handleOk'
                    >
                        验证
                    </van-button>
                </li>
            </ul>
        </van-popup>
	</div>
</template>

<script>
    import navHeader from '../../components/header/navHeader.vue';
    import Vue from 'vue';
    import { Button, Popup } from 'vant';

    Vue.use(Button);
    Vue.use(Popup);
	export default {
		name: 'conflictRemind',
		data() {
			return {
                value: '',
                show: false,
                word: '',
                showBtn: false,
                oneBtn: '验证并处理冲突',
                secBtn: '',
                isOvertime: false,
            }
		},
		components: {
			navHeader
        },
        created() {
        },
		methods: {
            todoClick () {
                this.show = true
                if(this.secBtn == '王德富') {
                    this.$router.push('/index')
                }
                if(this.isOvertime == false) {
                    this.sendMsg()
                }
            },
			sendMsg() {
                if(this.isOvertime){
                    return false;
                }
                let that = this,
                    time = 60;
                var sendTimer = setInterval(function(){
                    that.isOvertime = true;
                    time--;
                    that.word = time;
                    if(time < 0){
                        that.isOvertime = false;
                        clearInterval(sendTimer);
                        that.word = '';
                    }
                },1000)
            },
            handleOk() {
                this.showBtn = true
                this.show = false
                this.oneBtn = '登录王德富'
                this.secBtn = '王德富'
            }
		}
	}
</script>

<style lang="scss" scoped="scoped">
    .items {
        width: 100%;
        position: relative;
        .main {
            width: 90%;
            margin: 0 auto;
            margin-top: .8rem;
            .desc {
                color: rgba($color: #000000, $alpha: 1);
                font-size: .8rem;
                margin-top: 1.3rem;
            }
            .border {
                border: 1px solid rgba($color: #000000, $alpha: .1);
                margin-top: 1rem;
            }
            .account  {
                width: 90%;
                height: 6rem;
                margin: 1rem auto 0 auto;
                display: flex;
                .avatar {
                    width: 4rem;
                    height: 6rem;
                    .avatarTitle {
                        color: black;
                        font-size: .9rem;
                    }
                    .imgs {
                        width: 4rem;
                        height: 4rem;
                        border-radius: 34px;
                        margin-top: .5rem;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .nickname {
                    line-height: 7rem;
                    font-size: .8rem;
                    color: rgba($color: #000000, $alpha: .4);
                    margin-left: 1rem;
                }
            }
        }
        .footer {
            width: 100%;
            bottom: 0;
            position: absolute;
            .descs {
                width: 90%;
                margin: 0 auto;
                font-size: .8em;
                font-weight: 600;
                color: rgba($color: #000000, $alpha: .5);
            }
        }
        .title {
            text-align: center;
            padding: 1rem;
        }
        .descs {
            width: 80%;
            margin: 0 auto;
        }
        .inputs {
            background: rgba($color: #888181, $alpha: .2);
            width: 80%;
            margin: 1rem auto 1rem auto;
            height: 2.3rem;
            .input {
                background: rgba($color: #888181, $alpha: 0);
                line-height: 2.2rem;
                padding-left: 1rem;
                font-size: 1.3rem;
                font-weight: 100;
                width: 11rem;
            }
        }
    }
</style>
