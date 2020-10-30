// pages/home/home.js
Page({
  data:{
    name:'world',
    age: 18,
    student:[
      {id:110,name:'kobe',age:18},
      {id:120,name:'mini',age:19},
      {id:130,name:'daming',age:20}
    ],
    counter:0,
  },
  handleBtnClick(){
    //1.错误做法：界面是不会刷新的
    // this.data.counter +=1,
    //console.log(this.data.counter)
    //2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
    },
    handleSubteraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})
