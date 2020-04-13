<template>
	<baidu-map 
	:center="center" ak="kVNPpQD7vobSGZRglIg01dUOU7N4YsGv" :zoom="20" @ready="handler" class="mapcontainer"
	 @click='mapClick'>
		<bm-view class="map"></bm-view>
		
		<!-- <bm-control :offset="{width: '10px', height: '10px'}">
    <bm-auto-complete @searchcomplete='asd' v-model="keyword" :sugStyle="{zIndex: 1}">
     <input type="text" placeholder="关键字" v-model="keyword">
    </bm-auto-complete>
  </bm-control> -->
  
   <!-- <bm-local-search :keyword="keyword" :auto-viewport="true" :location="center"></bm-local-search> -->
  
		<!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation> -->
		 <!-- <bm-marker @click="show=true" :position="manualCenter" @dragend="dragend" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"> -->
      <!-- <bm-label :content="content" :labelStyle="{color: 'red', fontSize : '0.875rem'}" :offset="{width: -35, height: -35}"/> -->
		<!-- <bm-info-window :show="true" @close="show=false" @open="show=true">我爱北京天安门</bm-info-window> -->
	<!-- </bm-marker> -->
	</baidu-map>
</template>

<script>
	import BaiduMap from 'vue-baidu-map/components/map/Map.vue'; //必须 百度地图容器
	import BmView from 'vue-baidu-map/components/map/MapView.vue';  //地图视图组件
	import BmMarker from 'vue-baidu-map/components/overlays/Marker.vue';
	import BmLabel from 'vue-baidu-map/components/overlays/Label.vue';  //字体提示
	import BmNavigation from 'vue-baidu-map/components/controls/Navigation.vue';  //字体提示
	import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue';  //字体提示  
	import BmControl from 'vue-baidu-map/components/controls/Control.vue';  //字体提示   
	import BmAutoComplete from 'vue-baidu-map/components/others/AutoComplete.vue';  //字体提示  
	import BmLocalSearch from 'vue-baidu-map/components/search/LocalSearch.vue';  //地区检索  
	export default {
		data() {
			return {
				BMap: null, // 地图组件,
				center: {  //当前定位
					lng: 0,
					lat: 0
				},
				manualCenter:{
					lng: 0,
					lat: 0
				},
				keyword: '',
				location: '鄱阳',
				content:'',
				show:true
			}
		},
		components: {
			BaiduMap,BmView,BmMarker,BmLabel,BmNavigation,BmInfoWindow,BmControl,BmAutoComplete,BmLocalSearch
		},
		methods: {
			asd(e){console.log(this.keyword)},
			handler({
				BMap,
				map
			}) {
				console.log('百度地图加载完毕')
				var _this = this;
				_this.BMap=BMap;
				var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r) {
					_this.center = {
						lng: r.longitude,
						lat: r.latitude
					}; // 设置center属性值
				}, {
					enableHighAccuracy: true
				})
			},
			mapClick(e) {
				this.searchAdress(e);
			},
			dragend(e){
				console.log(!this.BMap)
				this.searchAdress(e);
			},
			searchAdress(e){
				if(this.BMap){
					var _this = this;
					 const geoCoder = new _this.BMap.Geocoder();
					 geoCoder.getLocation(e.point, function(res) {
						 _this.content=res.address;
						 _this.manualCenter=res.point;
						 console.log(res)
					 });
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.map,
	.mapcontainer {
		width: 100%;
		height: 100%;
	}
</style>
