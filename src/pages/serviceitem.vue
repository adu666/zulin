<template>
  <div>
    <Nav :idx="2"></Nav>
    <Banner></Banner>
    <div class="intrBox">
      <div class="intrboxcenter">
        <LeftNav></LeftNav>
        <div class="intrcont">
          <div class="intrtitle">
            <p>服务项目</p>
            <p>诚信铸就价值，品质赢得信赖</p>
          </div>
          <div class="services">
            <ul class="ulbox">
              <li v-for="(item,index) in anlis" :key="index">
                <img :src="item.img" alt />
                <p>{{item.text}}</p>
              </li>
            </ul>
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
    return {
      anlis: [
        {
          img: require("../assets/f1.png"),
          text: "吊机在工作"
        },
        {
          img: require("../assets/f2.png"),
          text: "吊机在工作"
        },
        {
          img: require("../assets/f3.png"),
          text: "吊机在工作"
        },
        {
          img: require("../assets/f4.png"),
          text: "吊机在工作"
        },
        {
          img: require("../assets/f5.jpg"),
          text: "吊机在工作"
        },
        {
          img: require("../assets/f6.jpg"),
          text: "吊机在工作"
        }
      ]
    };
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
.ulbox {
  width: 887px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.ulbox li {
  width: 262px;
}
.ulbox li img {
  width: 100%;
  height: 190px;
}
.ulbox li p {
  text-align: center;
  font-size: 16px;
  color: #333333;
  margin: 5px;
}
</style>