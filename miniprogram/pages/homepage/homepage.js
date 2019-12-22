
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/zhutu1.png',
      '/images/zhutu3.jpg',
      '/images/zhutu2.jpg'
    ],
    url1: '/images/sw1.jpg',
    url2: '/images/sw2.jpg',
    url3: '/images/sw3.jpg',
    url4: '/images/sw4.jpg',
    url5: '/images/sw5.jpg',
    url6: '/images/sw6.jpg',
    url7: '/images/sw7.jpg',
    url8: '/images/sw8.jpg',
    url9: '/images/sw9.jpg',
    url10: '/images/sw10.jpg',
    url11: '/images/sw11.jpg',
    url12: '/images/sw12.jpg',
    url13: '/images/sw13.jpg',
    url14: '/images/sw14.jpg',
    url15: '/images/sw15.jpg',
    url16: '/images/sw16.jpg',
    src1: '/images/sh1.jpg',
    src2: '/images/sh2.jpg',
    src3: '/images/sh3.jpg',
    src4: '/images/sh4.jpg',
    src5: '/images/sh5.jpg',
    src6: '/images/sh6.jpg',
    src7: '/images/sh7.jpg',
    src8: '/images/sh8.jpg',
    src9: '/images/sh9.jpg',
    src10: '/images/sh10.jpg',
    src11: '/images/sh11.jpg',
    src12: '/images/sh12.jpg',
    src13: '/images/sh13.jpg',
    src14: '/images/sh14.jpg',
    src15: '/images/sh15.jpg',
    src16: '/images/sh16.jpg',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    scrollTop: 0,
    searchInput: '',

    introduction: '***********************************************************',

  },

  phonecall1: function () {
    wx.makePhoneCall({
      phoneNumber: '123456789'
    })
  },
  phonecall2: function () {
    wx.makePhoneCall({
      phoneNumber: '123456789'
    })
  },
  phonecall3: function () {
    wx.makePhoneCall({
      phoneNumber: '123456789'
    })
  },

  detail1: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url1 + "&src=" + this.data.src1
    })
  },
  detail2: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url2 + "&src=" + this.data.src2,
    })
  },
  detail3: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url3 + "&src=" + this.data.src3,
    })
  },
  detail4: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url4 + "&src=" + this.data.src4,
    })
  },
  detail5: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url5 + "&src=" + this.data.src5,
    })
  },
  detail6: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url6 + "&src=" + this.data.src6,
    })
  },
  detail7: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url7 + "&src=" + this.data.src7,
    })
  },
  detail8: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url8 + "&src=" + this.data.src8,
    })
  },
  detail9: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url9 + "&src=" + this.data.src9,
    })
  },
  detail10: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url10 + "&src=" + this.data.src10,
    })
  },
  detail11: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url11 + "&src=" + this.data.src11,
    })
  },
  detail12: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url12 + "&src=" + this.data.src12,
    })
  },
  detail13: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url13 + "&src=" + this.data.src13,
    })
  },
  detail14: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url14 + "&src=" + this.data.src14,
    })
  },
  detail15: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url15 + "&src=" + this.data.src15,
    })
  },
  detail16: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list?url=' + this.data.url16 + "&src=" + this.data.src16,
    })
  },

  listenerSearchInput: function (e) {
    this.setData({
      searchInput: e.detail.value
    })

  },
  toSearch: function () {
    if (this.data.searchInput == '停车场管理' || this.data.searchInput == '停车场') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url1 + "&src=" + this.data.src1,
      })
    }
    else if (this.data.searchInput == '物业管理' || this.data.searchInput == '物业') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url2 + "&src=" + this.data.src2,
      })
    }
    else if (this.data.searchInput == '洗衣服务' || this.data.searchInput == '洗衣') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url3 + "&src=" + this.data.src3,
      })
    }
    else if (this.data.searchInput == '园林绿化工程服务' || this.data.searchInput == '园林' || this.data.searchInput == '绿化') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url4 + "&src=" + this.data.src4,
      })
    }
    else if (this.data.searchInput == '场地租赁') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url5 + "&src=" + this.data.src5,
      })
    }
    else if (this.data.searchInput == '清洗消毒服务' || this.data.searchInput == '清洗消毒' || this.data.searchInput == '消毒') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url6 + "&src=" + this.data.src6,
      })
    }
    else if (this.data.searchInput == '房地产中介服务' || this.data.searchInput == '房地产中介' || this.data.searchInput == '中介') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url7 + "&src=" + this.data.src7,
      })
    }
    else if (this.data.searchInput == '防虫灭鼠服务' || this.data.searchInput == '防虫灭鼠' || this.data.searchInput == '防虫' || this.data.searchInput == '灭鼠') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url8 + "&src=" + this.data.src8,
      })
    }
    else if (this.data.searchInput == '排水系统安装服务' || this.data.searchInput == '排水系统' || this.data.searchInput == '排水系统安装' || this.data.searchInput == '排水管安装') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url9 + "&src=" + this.data.src9,
      })
    }
    else if (this.data.searchInput == '酒店管理' || this.data.searchInput == '酒店') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url13 + "&src=" + this.data.src13,
      })
    }
    else if (this.data.searchInput == '建筑工程技术服务' || this.data.searchInput == '建筑工程技术' || this.data.searchInput == '建筑工程') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url10 + "&src=" + this.data.src10,
      })
    }
    else if (this.data.searchInput == '机械设备清洗服务' || this.data.searchInput == '机械设备清洗' || this.data.searchInput == '设备清洗' ) {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url11 + "&src=" + this.data.src11,
      })
    }
    else if (this.data.searchInput == '护理服务' || this.data.searchInput == '护理') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url12 + "&src=" + this.data.src12,
      })
    }
    else if (this.data.searchInput == '公厕清洁服务' || this.data.searchInput == '公厕清洁' || this.data.searchInput == '公厕') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url14 + "&src=" + this.data.src14,
      })
    }
    else if (this.data.searchInput == '工程排水服务' || this.data.searchInput == '工程排水' ) {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url15 + "&src=" + this.data.src15,
      })
    }
    else if (this.data.searchInput == '劳务派遣外包服务' || this.data.searchInput == '劳务派遣外包' || this.data.searchInput == '劳务派遣' || this.data.searchInput == '劳务外包' || this.data.searchInput == '劳务') {
      wx.navigateTo({
        url: '/pages/order-list/order-list?url=' + this.data.url16 + "&src=" + this.data.src16,
      })
    }

    else {
      wx.showModal({
        title: '查无此项',
        content: '请换个关键词试试'
      })
    }


  },

  onPageScroll(e) {
    let scrollTop = this.data.scrollTop
    this.setData({
      scrollTop: e.scrollTop
    })
  },

  orderlist: function () {
    wx.navigateTo({
      url: '/pages/order-list/order-list',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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