
export const objPlan = data => {  //遍历传参对象，拼接url地址上
  let res = "";
  for (let d in data) {
    res += d + "=" + data[d] + "&";
  }
  if (res) {
    res = res.substr(0, res.length - 1);
  }
  return res;
};

// 区分 安卓 0  苹果 1
export const AppFlag = () => {
  var u = navigator.userAgent,
      isAppFlag = '';
  if (u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1 || u.indexOf('iPod') > -1) {
      isAppFlag = '1'; // ios
  } else if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 || u.indexOf('Linux') > -1) {
      isAppFlag = '0'; // Android
  }
  return isAppFlag;
};

