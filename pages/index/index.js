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
    imgUrls_h: [
      '../../image/res/tu1.png',
      '../../image/res/tu2.png',
      '../../image/res/tu3.png',
      '../../image/res/tu4.png',
    ],
    list: [
      {
        id: "zu1",
        name: '组1',
        detail: [{
          idd: "1",
          url: '../../image/res/tu1.png',
        }, {
          idd: "2",
          url: '../../image/res/tu2.png',
        }, {
          idd: "3",
          url: '../../image/res/tu3.png',
        }, {
          idd: "4",
          url: '../../image/res/tu4.png',
        }]
      },
      {
        id: "zu2",
        name: '组2',
        detail: [{
          idd: "4",
          url: '../../image/res/tu1.png',
        }, {
          idd: "5",
          url: '../../image/res/tu2.png',
        }, {
          idd: "6",
          url: '../../image/res/tu3.png',
        }, {
          idd: "7",
          url: '../../image/res/tu4.png',
        }]
      },
      {
        id: "zu3",
        name: '组3',
        detail: [{
          idd: "8",
          url: '../../image/res/tu1.png',
        }, {
          idd: "9",
          url: '../../image/res/tu2.png',
        }, {
          idd: "10",
          url: '../../image/res/tu3.png',
        }, {
          idd: "11",
          url: '../../image/res/tu4.png',
        }]
      }
     ]

    ,

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
  toDetail:function(e){
    var tag = e.target;
    //var id=tag.idd;
    console.log(tag.id);
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  onLoad: function() {}

})