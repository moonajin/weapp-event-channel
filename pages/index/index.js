Page({
  data: {
    page: 1,
    params: ""
  },
  // 跳转到页面2
  goList() {
    wx.navigateTo({
      url: `/pages/list/list?page=${this.data.page}&limit=20`, // 带参数的url，值可以是一个变量
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        someEvent: data => {
          this.setData({
            params: data
          })
        },
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test111' })
      }
    });
  }
})
