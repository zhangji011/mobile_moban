<template>
    <div class="info">
		<nav-header :text="'资讯'" :iconshow="false" ></nav-header>
        <van-search 
            v-model="value"
            placeholder="请输入关键词"
            background="#4f87ed"
            shape="square"
        />
        <van-tabs v-model="active" color="#4f87ed" title-active-color="#4f87ed">
            <van-tab title="标签 1">
                <scroll-refresh 
                    ref="pullrefresh"
                    :pullup="isShow"
                    :pulldown="isShow"
                    @pulldown="loadDown"
                    @scrollToEnd="loadup"
                >
                    <div class="items" v-for="item of 10" :key="item.key">
                        <div class="itemL"></div>
                        <div class="itemR">
                            <p class="desc"></p>
                        </div>
                    </div>
                </scroll-refresh>
            </van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
            <van-tab title="标签 5">内容 5</van-tab>
        </van-tabs>
    </div>
</template>
<script>
    import {mapGetters,mapMutations} from 'vuex';
    import navHeader from '../../components/header/navHeader.vue';
    import scroll from '../../components/scroll/scroll.vue';
    import scrollRefresh from '../../components/scroll/scrollRefresh.vue';
    import Vue from 'vue';
    import { Search, Tab, Tabs } from 'vant';

    Vue.use(Search);
    Vue.use(Tab);
    Vue.use(Tabs);
export default {
    data() {
        return {
            value: '',
            active: 0,
            isShow: true,
            page: 1
        }
    },
	computed: {
		...mapGetters(['token'])
	},
	components:{ scroll, navHeader, scrollRefresh },
    mounted() {
        // console.log("token:"+this.token);
    },
    methods: {
        loadDown() {
            this.$refs.pullrefresh.$emit('pullrefresh.finishLoad')
            // this._getDataInfo(1)
            console.log('下拉刷新')
        },
        loadup() {
            if(!this.page) return
            this.page ++ 
            this.$refs.pullrefresh.$emit('infinitescroll.reInit')
            console.log('上拉加载')
        },
        _getDataInfo(page) {
            console.log(page)
            // notice(page).then((res) => {
            //     if(res.list.length >= 10){
            //     this.list = [...this.list, ...res.list]
            //     //单次请求数据加载完毕后
            //     this.$refs.pullrefresh.$emit('infinitescroll.finishLoad')
            //     }else{
            //     //把page设置成false 数据已经加载完毕了 不用在加载了
            //     this.page = false
            //     //所有数据加载完毕后
            //     this.$refs.pullrefresh.$emit('infinitescroll.loadedDone')
            //     }
            // })
        }
    },
}
</script>
<style lang="scss" scoped>
    .info{
        bottom: 0;
        left: 0;
        right: 0;
        min-height: 100%;
        overflow: hidden;
        .items {
            width: 100%;
            height: 10rem;
            border: 1px solid #4f87ed;
            display: inline-block;
            .itemL {
                width: 40%;
                height: 8rem;
            }
            .itemR {
                width: 40%;
            }
        }
    }
</style>
