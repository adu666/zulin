<template>
  <div>
      <Nav :idx="0"></Nav>
      <Banner></Banner>
      <About></About>
      <Product></Product>
      <Bottom class="bottom"></Bottom>
  </div>
</template>
<script>
import Nav from "../components/nav";
import Banner from "../components/Banner";
import  About from "../components/About";
import  Product from "../components/ClassicCase";
import  Bottom from "../components/Bottom";
export default {
  data() {
    return {};
  },
  components: {
     Nav,
     Banner,
     About,
     Product,
     Bottom
  },
  mounted() {}
};
</script>
<style scoped>
.bottom{
  margin-top: 30px
}
</style>