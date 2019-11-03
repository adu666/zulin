<template>
  <div>
    <el-carousel height="500px" :interval="3000" @change="carouselChange">
      <el-carousel-item class="banner_one">
        <div class="bannerCenter">
          <div class="describe">
            <img :class="['animated',{fadeInRight:num ===0}]" src="../assets/fuwu.png" alt />
            <p :class="['animated',{bounceInUp:num ===0}]">筑路机械</p>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item class="banner_two">
        <div class="bannerCenter bannerCenter1">
          <div class="describetwo" :class="['animated',{fadeInLeft:num ===1}]">
            <p class="crane_name">
              <b>
                <span style="color: rgb(19, 37, 57);">专业可靠吊车起重</span>
              </b>
            </p>
            <p class="serve">对服务目标全方位、多维度的组合支持</p>
          </div>
          <img src="../assets/4.png" alt class="car" :class="['animated',{bounceInRight:num ===1}]" />
        </div>
      </el-carousel-item>
      <el-carousel-item class="banner_three">
        <div class="bannerCenter">
          <div class="describethree">
            <p class="crane_namet" :class="['animated',{zoomInLeft:num ===2}]" >
              <b>
                <span style="color:#fff;">诚信租赁</span>
              </b>
            </p>
            <p class="crane_namer" :class="['animated',{zoomInRight:num ===2}]">
              <b>
                <span style="color:#fff;">值得信赖</span>
              </b>
            </p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    };
  },
  methods: {
    carouselChange(num) {
      console.log(num);
      this.num = num;
    }
  }
};
</script> 

<style>
.banner_one {
  width: 100%;
  height: 100%;
  background: url("../assets/1.jpg") center no-repeat;
}
.banner_two {
  width: 100%;
  height: 100%;
  background: url("../assets/5.jpg") center no-repeat;
}
.banner_three {
  width: 100%;
  height: 100%;
  background: url("../assets/3.jpg") center no-repeat;
}
.bannerCenter {
  width: 1200px;
  height: 100%;
  position: relative;
  margin: auto;
}
.bannerCenter1 {
  display: flex;
  justify-content: space-between;
}
.describe {
  float: right;
  margin-right: 30px;
}
.describe img {
  width: 398px;
  height: 104px;
  margin-top: 200px;
}
.describe p {
  width: 162px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #c40000;
  opacity: 0.9;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 10px;
  margin-top: 50px;
}
.crane_name {
  font-size: 45px;
  width: 100%;
  text-align: center;
  margin-top: 100px;
}
.describethree{
  width: 400px;
  float: right;
  margin-right: 50px
}
.crane_namet {
  font-size: 45px;
  width: 100%;
  text-align: left;
  margin-top: 150px;
}
.crane_namer {
  font-size: 45px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
.describetwo {
  width: 400px;
}
.serve {
  width: 258px;
  height: 30px;
  background: #ff6537;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  margin: auto;
  margin-top: 20px;
}
.car {
  width: 832px;
  height: 379px;
  margin-top: 96px;
}
.el-carousel__arrow {
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  height: 72px !important;
  width: 72px !important;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 10% !important;
  background-color: rgba(41, 43, 45, 0.3) !important;
  color: #fff;
  position: absolute;
  top: 50%;
  z-index: 10;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  font-size: 30px !important;
}
</style>>
