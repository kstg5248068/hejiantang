//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    // imgUrls: [
    //   'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
    //   'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
    //   'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    // ],
    imgUrls:[
      '../../image/res/tu1.png',
      '../../image/res/tu2.png',
      '../../image/res/tu3.png',
      '../../image/res/tu4.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  }
 
})
