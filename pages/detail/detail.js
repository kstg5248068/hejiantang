Page({
  data: {
   
    //goods_detail_info
    goods_detail_info: {
      name: "巨青春TM胶原戴白蓝莓果饮盒装50ml*8瓶",
      original_price: 168,
      present_price: 168,
      isExpress: true,
      evaluate: [],
      recommendation: '无',
      // banner
      imgUrls: [
        '../../image/res/tu1.png',
        '../../image/res/tu2.png',
        '../../image/res/tu3.png',
        '../../image/res/tu4.png',
      ],
      // 商品详情介绍
      goods_detail_image: [
        '../../image/res/tu1.png',
        '../../image/res/tu2.png',
        '../../image/res/tu3.png',
        '../../image/res/tu4.png',
      ]
    },
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
  },
  //预览图片
  previewImage: function(e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
 
  // 跳到购物车
  toCart() {
    wx.switchTab({
      url: '../cart/cart'
    })
    wx.showToast({
      title: '2',
      icon: 'success',
      duration: 2000
    });
  },
  // 立即购买
  // immeBuy() {
  //   wx.showToast({
  //     title: '购买成功',
  //     icon: 'success',
  //     duration: 2000
  //   });
  // },
  toMain(){
    wx.switchTab({
      url: '../index/index'
    })
    },
 
})