<template>
  <div>
    <Nav :idx="3"></Nav>
    <Banner></Banner>
    <div class="intrBox">
      <div class="intrboxcenter">
        <LeftNav></LeftNav>
        <div class="intrcont">
          <div class="intrtitle">
            <p>经营范围</p>
            <p>诚信铸就价值，品质赢得信赖</p>
          </div>
          <p
            class="intertext"
          >建筑垃圾清运，机械租赁，土方开挖，工业垃圾，生活垃圾，绿化养护，土石方工程施工，爆破与拆除工程施工，市政公用工程施工，建筑材料。</p>
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
  
}
</style>