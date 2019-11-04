<template>
  <div>
    <Nav :idx="1"></Nav>
    <Banner></Banner>
    <div class="intrBox">
      <div class="intrboxcenter">
        <LeftNav></LeftNav>
        <div class="intrcont">
          <div class="intrtitle">
            <p>公司简介</p>
            <p>诚信铸就价值，品质赢得信赖</p>
          </div>
          <p
            class="intertext"
          >上海诚信租赁公司成立于2009年，本公司拥有总资产800万元，年营业额:2000万元 。公司主营垃圾清运、机械租赁、土石方工程施工、爆破与拆除工程施工、市政公用工程施工这五大版块。公司始终坚持“服务良好、信誉至上”的宗旨，更以“开拓、竞争、敬业、创新”为企业精神，贯彻“抓管理、树品牌、创效益”的企业经营方针，在狠抓工程质量的同时，更重视文明施工的过程，拥有良好的社会信誉，深受广大客户的好评。公司以诚信为本，“服务求生存、信誉求发展”为企业经营理念，发展创新为指南；公司以上海环境集团为依托，秉承市场为导向，始终以客户需求为核心，务实的精神专注的水平，真诚的服务态度，塑造品牌的形象，努力使公司成为行业的典范</p>
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
</style>