//index.js
//获取应用实例
//我们提供了全局的getApp()函数，可以获取到小程序实例。
/*
* var appInstance = getApp()
 console.log(appInstance.globalData)  获取app。js里面的 globalData！！
* */
var app = getApp();

//Page()函数用来注册一个页面。接受一个object参数，其指定页面的初始数据、生命周期函数、事件处理函数等

Page({
  data: {    //页面的初始数据
	text: "This is page data."
  },
  onLoad: function(options) {
	// 监听页面加载
	//一个页面只会调用一次。
	//接收页面参数可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query。
  },
  onReady: function() {
	// 监听页面初次渲染完成
  //一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
	//对界面的设置如wx.setNavigationBarTitle请在onReady之后设置
  },
  onShow: function() {
	// 监听页面显示
	//每次打开页面都会调用一次
  },
  onHide: function() {
	// 监听页面隐藏
	//当navigateTo或底部tab切换时调用。
  },
  onUnload: function() {
	// 监听页面卸载
	//当redirectTo或navigateBack的时候调用
  },
  onPullDownRefresh: function() {
	// 监听用户下拉动作
  },
  onReachBottom: function() {
	// 页面上拉触底事件的处理函数
  },
  // 开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 this 可以访问
  viewTap: function() {
	this.setData({  //函数用于将数据从逻辑层发送到视图层，同时改变对应的this.data的值
	  text: 'Set some data for updating view.'
	  /*注意：
	   直接修改this.data无效，无法改变页面的状态，还会造成数据不一致。
	   单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。*/
	})
  },
  customData: {
	hi: 'MINA'
  }
})


//渲染页面
/*
* 示例代码：
 <view>{{text}}</view>
 <view>{{array[0].msg}}</view>
 Page({
 data: {
 text: 'init data',
 array: [{msg: '1'}, {msg: '2'}]
 }
 })*/

/*  绑定事件
* <view bindtap="viewTap"> click me </view>
 Page({
 viewTap: function() {
 console.log('view tap')
 }
 })*/

/*<!--index.wxml-->
 <view>{{text}}</view>
 <button bindtap="changeText"> Change normal data </button>
 <view>{{array[0].text}}</view>
 <button bindtap="changeItemInArray"> Change Array data </button>
 <view>{{obj.text}}</view>
 <button bindtap="changeItemInObject"> Change Object data </button>
 <view>{{newField.text}}</view>
 <button bindtap="addNewField"> Add new data </button>*/
