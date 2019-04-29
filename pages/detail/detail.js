Page({
  data: {
    showDialog: false,

    // input默认是1  
    num: 1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled',
    //goods_detail_info
    goods_detail_info: {
      name: "巨青春TM胶原戴白蓝莓果饮盒装50ml*8瓶",
      original_price: 168,
      present_price: 168,
      isExpress: true,
      evaluate: [],
      recommendation: '无', //推荐
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
    expressImage: '../../image/gou.png',

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
  toMain() {
    wx.switchTab({
      url: '../index/index'
    })
  },
  // 跳到购物车
  toCart() {
    wx.switchTab({
      url: '../cart/cart'
    })
  },

  addCart() {
    wx.showToast({
      title: '测试加入购物车',
      icon: 'success',
      duration: 2000
    });
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },

  toggleDialog() {
    const showDialog=this.data.showDialog;   
    if (showDialog){
      this.setData({
        showDialog: false
      })
    }else{
      this.setData({
        showDialog: true
      })
    }
   


  },

  /* 点击减号 */
  bindMinus() {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus() {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual(e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  }


})