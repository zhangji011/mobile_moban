<template>
	<div>
		<nav-header :text="'关于我的丰城'"></nav-header>
        <div class="item">
            <div class="icons"></div>
            <p class="desc">xxxxxxxxxx</p>
        </div>
        <section>
			<ul class="nav_ul">
				<li class="nav_li" @click="checkClick">
					<div class="title">检查更新</div>
                    <div class="icon"></div>
				</li>
                <li class="nav_li" @click="aboutClick">
					<div class="title">关于我们</div>
                    <div class="icon"></div>
				</li>
                <li class="nav_li" @click="privateClick">
					<div class="title">隐私政策</div>
                    <div class="icon"></div>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	import navHeader from '../../components/header/navHeader.vue';
	export default {
		name: 'mineAbout',
		data() {
			return {}
		},
		components: {
			navHeader
		},
		methods: {
			checkClick() {
                console.log('checkClick')
            },
            aboutClick() {
                console.log('aboutClick')
            },
            privateClick() {
                console.log('privateClick')
            }
		}
	}
</script>

<style lang="scss" scoped="scoped">
    .item {
        width: 100%;
        height: 10rem;
        .icons {
            width: 4rem;
            height: 4rem;
            margin: 1rem auto 0 auto;
            border: 1px solid #4f87ed;
        }
        .desc {
            text-align: center;
            margin: 0 auto;
        }
    }
    .nav_ul{
		width: 100%;
		height: 3rem;
		.nav_li{
			width: 100%;
			height: 100%;
			padding: 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 0.875rem;
			border-bottom: 1px solid #eee;
			.title{}
			.icon{
				width: 0.7rem;
				height: 0.7em;
				border-top: 2px solid #c8c5c5;
				border-right: 2px solid #c8c5c5;
				transform: rotate(45deg);
			}
		}
	}
</style>
