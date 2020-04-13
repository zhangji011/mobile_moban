<template>
	<div class="items">
		<nav-header :text="'验证手机'"></nav-header>
        <div class="main">
            <p class="desc">为了防止账号丢失以及方便找回，请绑定手机号</p>
            <div class="phone">
                <div class="input">139****9999</div>
            </div>
            <van-button 
                type="primary" 
                block 
                color="#4f87ed" 
                style="margin-top: 1.5rem"
                @click="binding"
            >一键绑定</van-button>
            <p class="desc">登录即表明同意 用户协议 和 隐私政策 以及《中国移动认证条款》</p>
        </div>
        <div class="footer">
            <div class="descs" @click="otherClick">使用其它手机号</div>
        </div>
	</div>
</template>

<script>
    import navHeader from '../../components/header/navHeader.vue';
    import Vue from 'vue';
    import { Button } from 'vant';

    Vue.use(Button);
	export default {
		name: 'verifyPhone',
		data() {
			return {
                value: '',
                msg: 2
            }
		},
		components: {
			navHeader
		},
		methods: {
			binding() {
                console.log('click')
                if(this.msg == 1) {
                    this.$router.push('/index')
                }else {
                    this.$router.push('/conflictRemind')
                }
            },
            otherClick() {
                console.log('other')
                this.$router.push('/otherPhone')
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
                line-height: 2.9rem;
                .input {
                    font-size: 1.7rem;
                    text-align: center;
                    background: rgba($color: #888181, $alpha: -1.5);
                }
            }
            .desc {
                color: rgba($color: #000000, $alpha: 1);
                font-size: .8rem;
                margin-top: 1.3rem;
                text-align: center;
            }
        }
        .footer {
            width: 100%;
            height: 8rem;
            bottom: 0;
            position: absolute;
            text-align: center;
            .descs {
                display: inline-block;
                font-size: .8em;
                font-weight: 600;
                color: rgba($color: #4f87ed, $alpha: 1);
            }
        }
    }
</style>
