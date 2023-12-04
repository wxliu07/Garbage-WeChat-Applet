Component({

  properties: {
    list: {
      type: Array,
      value: []
    }
  },
  data: {
    swiper: {
      margin: "150rpx",
      // border-radius: "10px",
    },
    currentIndex: 0
  },

  methods: {
    swiperChange: function (e) {
      this.setData({
        currentIndex: e.detail.current
      })
    },
    cardClick(e) {
      this.triggerEvent('cardClick', {
        type:e.currentTarget.dataset.type
      })
    }
  }
})