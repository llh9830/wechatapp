// pages/order/order.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId: "",
    orderList: false,
    name: [],
    portableList: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var openId = "";
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      console.log(res);
      this.setData({
        openId: res.result.event.userInfo.openId
      });
    }).catch(err => {
      console.log(err);
    })
    db.collection('userorder').where({
      _openid: openId,
    })
      .get().then(res => {
        console.log(res);
        if (res.data == 0) {
          this.setData({
            orderList: false
          });
        } else {
          this.setData({
            orderList: true,
            name: res.data
          });
        };
      }).catch(err => {
        console.log(err);
      })

  },


  delete: function (e) {
    var that = this;
    var i = e.currentTarget.id;

    wx.showModal({
      title: '提示',
      content: '确定取消订单吗？',
      success(res) {
        if (res.confirm) {
          db.collection('userorder').doc(i).get({
            success: function (res) {
              console.log(res.data);
              var myList = new Array('联系人：' + res.data.name, '服务类型：' + res.data.service, '联系方式：' + res.data.contact, '地址：' + res.data.address, '备注：' + res.data.text, '原定时间:' + res.data.time);
              var portableList = myList.join(',');
              wx.cloud.callFunction({
                name: "deleteMail",
                data: {
                  list: portableList
                }
              })
                .then(res => {
                  console.log(res)
                }).catch(err => {
                  console.log(err)
                })

            }
          })

          db.collection('userorder').doc(i).remove({
            success: function (res) {
              that.onLoad();

            }
          })

        }
      }
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