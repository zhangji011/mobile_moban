
const cms = {
  state: {
    userInfo: {}, //用户ID
	imageUrl:'', //用户头像
	baiduAk:'kVNPpQD7vobSGZRglIg01dUOU7N4YsGv' ,//百度地图秘钥
	token:'eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNpkjj0LwkAQRP_L1gnsfd_aWaQQ0mknIrebC0QwSnIBQfzvRi1t38w85gnzwrABZZRxOkbyGiqY5XbPsDnCvmnO27aFUwVjuua_okw5ldwdhk-mXHSavA0aESvIj_uXBSLrTaxgmfO061YH-0DRGybOyRJp1sn1rFxw0ositYqHVH5Ci_o7TiK3ZSx_Dy5lWJnRSCiUau5DV1thqRMy1dJhJpagIiK83gAAAP__.WD3JeUj9b6rTgpt60PVp6M52eRPg36o0v6OFUs_7mJk',
	tabbarShow:false
  },
  mutations: {
	replaceState(state, payload){ //解决刷新vuex状态重置
		state=payload;
	},
    setUserInfo(state, payload) {
      state.userInfo = payload; //登录接口返回用户信息
	  state.token = payload.token;  //token
	  state.imageUrl = payload.imageUrl;  //token
    },
	updateTabbarShow(state, payload){
		state.tabbarShow = payload
	},
	updateUserInfoImg(state, payload){
			state.imageUrl=payload;
	}
  },
  actions: {
    // GetIndexCmsData({
    //   commit,
    //   state
    // }, parameterData) {
    //   return new Promise((resolve, reject) => {
    //     getIndexCmsData(parameterData).then(response => {
    //       commit('SET_INDEXCMS_DATA', response);
    //       resolve(response)
    //     }, err => {
    //       reject(err)
    //     })
    //   })
    // }
  }
}
export default cms
