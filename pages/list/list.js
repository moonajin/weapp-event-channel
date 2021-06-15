// pages/list/list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    params: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { params } = this.data;
    params.page = options.page;
    params.limit = options.limit;
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage', function (query) {
      params.data = query.data
    })
    this.setData({
      params: params
    })
  },
  // 返回上一页
  goBack() {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit('someEvent', "test222");
    wx.navigateBack();
  }
})