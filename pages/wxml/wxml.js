// pages/wxml/wxml.js
Page({

  
  data: {
      messages:'hello cheng',
      name:'kobe',
      age:18,
      nowTime:new Date().toLocaleString(),
      isActive:true,
      isShow:true,
      score:98
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    })
  },
  handleSwitchColor(){
    this.setData({
        isActive:!this.data.isActive
    })
  },
  handleChangeShow(){
    this.setData({
      isShow:!this.data.isShow
  })
  }
  
})