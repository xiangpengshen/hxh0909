//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  methods: {
    //回退
    _navBack: function () {
      wx.switchTab({
        delta: 1
      })
    },
    //回主页
    _toIndex: function () {
      wx.switchTab({
        url: '/pages/index/index'
      })
    },
  }
})
