<template>
  <div>
    <div>
      <ul class="serves">
        <li>服务项目 Service</li>
        <li>工程机械租赁</li>
        <li>垃圾清运</li>
      </ul>
      <ul class="contacts">
        <li>联系我们 Contact</li>
        <li>
          <img src="../assets/lianxi.png" alt />
        </li>
      </ul>
      <div class="loanxis">
        <p style="font-size:16px; line-height:30px;">
          电话：021-12365987
          <br />传真：021-68989544
          <br />联系人：李先生 15821623541&nbsp;&nbsp;
          <br />邮箱：2992758888@qq.com
          <br />地址：上海市浦东新区云台路3169号
          <br />网址：www.zulin6666.com
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.serves {
  width: 288px;
  overflow: hidden;
}
.serves li:nth-of-type(1) {
  width: 100%;
  position: relative;
  text-align: center;
  pointer-events: none;
  background: #c40000;
  padding: 22px 0;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}
.serves li:nth-of-type(2) {
  height: 50px;
  line-height: 48px;
  border: 1px #c5c5c5 solid;
  box-sizing: border-box;
  background: #efefef;
  padding: 0 0 0 5px;
  transition: all 0.3s;
  font-size: 16px;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin: 4px 0 0 0;
  text-align: left;
  text-indent: 40px;
}
.serves li:nth-of-type(3) {
  height: 50px;
  line-height: 48px;
  border: 1px #c5c5c5 solid;
  box-sizing: border-box;
  background: #efefef;
  padding: 0 0 0 5px;
  transition: all 0.3s;
  font-size: 16px;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin: 4px 0 0 0;
  text-align: left;
  text-indent: 40px;
}
.contacts {
  width: 288px;
  overflow: hidden;
  margin-top: 20px;
}
.contacts li:nth-of-type(1) {
  width: 100%;
  position: relative;
  text-align: center;
  pointer-events: none;
  background: #c40000;
  padding: 22px 0;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}
.contacts li:nth-of-type(2) img {
  width: 100%;
  height: 100%;
}
.loanxis {
  padding: 20px 10px;
  border: 1px #c5c5c5 solid;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 25px;
  color: #333;
  background: #efefef;
}
</style>