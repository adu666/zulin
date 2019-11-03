<template>
  <div>
    <div class="product aboutus">
      <div class="productcenter aboutcenter">
        <p class="about">服务案例</p>
        <ul class="ulbox">
          <li v-for="(item,index) in anlis" :key="index">
            <img :src="item.img" alt />
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<style scoped>
.aboutus {
  width: 100%;
  background: #ffffff;
}
.aboutcenter {
  width: 1200px;
  height: 100%;
  margin: auto;
}
.about {
  font-size: 36px;
  color: #333333;
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
}
.ulbox {
  width: 1200px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.ulbox li {
  width: 375px;
}
.ulbox li img {
  width: 100%;
  height: 270px;
}
.ulbox li p {
  text-align: center;
  font-size: 16px;
  color: #333333;
  margin: 5px;
}

</style>