<template>
  <div>
    <Nav :idx="4"></Nav>
    <Banner></Banner>
    <div class="intrBox">
      <div class="intrboxcenter">
        <LeftNav></LeftNav>
        <div class="intrcont">
          <div class="intrtitle">
            <p>联系我们</p>
            <p>诚信铸就价值，品质赢得信赖</p>
          </div>
          <div class="services">
            <p style="font-size:16px; line-height:30px;" class="pconr">
              电话：021-12365987
              <br />传真：021-68989544
              <br />联系人：李先生 15821623541&nbsp;&nbsp;
              <br />邮箱：2992758888@qq.com
              <br />地址：上海市浦东新区云台路3169号
              <br />网址：www.zulin6666.com
            </p>
            <div class="qqbox">
              <div class="wxcode">
                <img src="../assets/wxcode.jpg" alt />
                <p>扫一扫添加微信</p>
              </div>
              <div class="wxcode">
                <img src="../assets/qq.png" alt />
                <p>扫一扫添加QQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom class="bottom"></Bottom>
  </div>
</template>
<script>
import Nav from "../components/nav";
import Banner from "../components/Banner";
import Bottom from "../components/Bottom";
import LeftNav from "../components/LeftNav";
export default {
  data() {
    return {};
  },
  components: {
    Nav,
    Banner,
    Bottom,
    LeftNav
  },
  mounted() {}
};
</script>
<style scoped>
.intrBox {
  width: 100%;
  padding: 20px 0;
  background: #ffffff;
}
.intrboxcenter {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.intrcont {
  width: 887px;
}
.intrtitle {
  height: 42px;
  line-height: 42px;
  border-bottom: 1px #c0c0c0 solid;
  display: flex;
  justify-content: space-between;
}
.intrtitle p:nth-of-type(1) {
  width: 108px;
  color: #333;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  border-bottom: 3px solid #c40000;
  height: 40px;
}
.intrtitle p:nth-of-type(2) {
  color: #333;
  font-size: 16px;
  text-align: center;
}
.intertext {
  margin-top: 30px;
  font-size: 16px;
  line-height: 30px;
  color: #333333;
  text-indent: 50px;
}
.services{
    display: flex;
    margin-top: 30px;
}
.qqbox{
    display: flex;
    align-items: center;
    margin-left: 40px
}
.wxcode{
    width: 250px;
    margin: 10px
}
.wxcode img{
    width: 250px;
    height: 250px;
}
.wxcode p{
    font-size: 14px;
    margin-top: 10px;
    color: #333;
    text-align: center
}
.pconr{
    margin-top: 10px
}
</style>