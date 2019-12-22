const util = require('../../utils/util.js')
const db = wx.cloud.database()

Page({

  data: {
    name: '',
    address: '',
    contact: '',
    service: '',
    formId: '',
    openId: '',
    time: '',
    text: '',
    array: ['请选择当前服务类型', '停车场管理', '物业管理', '洗衣服务', '园林绿化服务', '场地租赁', '清洗消毒服务', '房地产中介服务', '防虫灭鼠服务', '排水系统安装服务', '酒店管理', '建筑工程技术服务', '机械设备清洗服务', '护理服务', '公厕清洁服务', '工程排水服务', '劳务派遣外包服务'],

    index: 0
  },

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

  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value,
      service: this.data.array[e.detail.value]
    })
  },

  add: function () {
    if (this.data.name == "") {
      wx.showModal({
        title: '错误',
        content: '请输入姓名',
      })
    }
    else if (this.data.service == "") {
      wx.showModal({
        title: '错误',
        content: '请选择预约服务',
      })
    }
    else if (this.data.contact == "") {
      wx.showModal({
        title: '错误',
        content: '请输入联系方式',
      })
    }
    else if (this.data.service == "") {
      wx.showModal({
        title: '错误',
        content: '请输入详细地址',
      })
    } else {
      var lytime = util.formatTime(new Date())
      console.log(lytime)
      this.setData({
        time: lytime
      })
      db.collection('userorder').add({
        data: {
          name: this.data.name,
          contact: this.data.contact,
          address: this.data.address,
          service: this.data.service,
          text: this.data.text,
          time: this.data.time,
          condition: '待确认'
        }
      }).then(res => {
        wx.showToast({
          title: '成功',
        })
      }).catch(err => {
        wx.showToast({
          title: '失败',
        })
      })
      wx.cloud.callFunction({
        name: 'openapi',
        data: {
          name: this.data.name,
          contact: this.data.contact,
          address: this.data.address,
          service: this.data.service,
          formId: this.data.formId,
          openId: this.data.openId,
          time: this.data.time
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      var myList = new Array('联系人：' + this.data.name, '服务类型：' + this.data.service, '联系方式：' + this.data.contact, '地址：' + this.data.address, '备注：' + this.data.text, '时间:' + this.data.time);

      var portableList = myList.join(',');
      wx.cloud.callFunction({
        name: "sendMail",
        data: {
          orderlist: portableList
        }
      })
        .then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      this.setData({
        name: '',
        contact: '',
        address: '',
        text: '',
      })
    }
   

  },

  submit: function (e) {
    console.log(e.detail.formId);
    this.setData({
      formId: e.detail.formId
    })
  },

  getname: function (event) {
    this.setData({
      name: event.detail.value
    });
  },

  getcontact: function (event) {
    this.setData({
      contact: event.detail.value
    });
  },

  getaddress: function (event) {
    this.setData({
      address: event.detail.value
    });
  },
  gettext: function (event) {
    this.setData({
      text: event.detail.value
    });
  }

})