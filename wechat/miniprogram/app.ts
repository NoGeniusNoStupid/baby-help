App<IAppOption>({
  globalData: {
    city: '深圳',
  },
  onLaunch() {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#fff5ef',
    })
  },
})
