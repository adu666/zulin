<template>
  <div>
    <div class="propaganda">
      <div class="propagandacengter">
        <div class="icon_item">
          <img src="../assets/icon1.png" alt class="lefticon" />
          <div class="right_cont">
            <p>优良品牌</p>
            <p>值得信赖</p>
          </div>
        </div>
        <div class="icon_item">
          <img src="../assets/icon2.png" alt class="lefticon" />
          <div class="right_cont">
            <p>手续快捷</p>
            <p>迅速高效</p>
          </div>
        </div>
        <div class="icon_item">
          <img src="../assets/icon3.png" alt class="lefticon" />
          <div class="right_cont">
            <p>信誉可靠</p>
            <p>值得放心</p>
          </div>
        </div>
        <div class="icon_item">
          <img src="../assets/icon4.png" alt class="lefticon" />
          <div class="right_cont">
            <p>刻意求真</p>
            <p>崇尚品质</p>
          </div>
        </div>
      </div>
      <div class="phones">
        <div class="tels">
          <p>联系电话：15821623541</p>
          <p>地址：浦东区陆家嘴东方明珠80号</p>
        </div>
        <div class="wxcode">
           <img src="../assets/wxcode.jpg" alt="">
           <p>扫描二维码添加微信</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.propaganda {
  width: 100%;
  padding: 30px 0px;
  background: #333333;
}
.propagandacengter {
  width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.icon_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 186px !important;
}
.lefticon {
  width: 92px;
  height: 92px;
}
.right_cont p {
  font-size: 20px;
  line-height: 30px;
  color: #fff;
}
.phones{
    width: 1200px;
    padding: 20px 0;
    margin: auto;
    display: flex;
}
.tels p{
    color: #fff;
    font-size: 18px;
    margin-top: 10px;
}
.wxcode{
    margin-left: 100px;
}
.wxcode img{
    width: 120px;
    height: 120px
}
.wxcode p{
      color: #fff;
    font-size: 12px;
    margin-top: 10px;
    text-align: center
}
</style>