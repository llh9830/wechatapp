// pages/my/my.js
Page({

  data: {
    test: "true"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  contact1: function () {
    wx.makePhoneCall({
      phoneNumber: '123456789',
    })
  },
  contact2: function () {
    wx.makePhoneCall({
      phoneNumber: '123456789',
    })
  },
  contact3: function () {
    wx.makePhoneCall({
      phoneNumber: '123456789',
    })
  },

  orderlist: function () {
    wx.navigateTo({
      url: '/pages/order/order',
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})