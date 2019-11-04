<template>
  <div class="navtop">
    <div class="nav_item">
      <h1 class="logos">
        <font color="#c40000">
          <b>诚信租赁</b>
        </font>
      </h1>
      <ul>
        <li
          v-for="(item,index) of items"
          :key="index"
          :class="[item.cls,{on:index === idx}]"
          @click="$router.push(item.push)"
        >{{item.name}}</li>
      </ul>
      <div class="iphone">
        <img
          src="https://10944571.s61i.faiusr.com/2/AD0Iu4CcBRACGAAg9-mavgUooIe6kQEwLDgs.jpg"
          alt="联系方式"
        />
        <h2>
          <a href="tel:15821623541">15821623541</a>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["idx"],
  data() {
    return {
      items: [
        {
          cls: "shouye",
          name: "首页",
          push: "/"
        },
        {
          cls: "jianjie",
          name: "公司简介",
          push: "/introduction"
        },
        {
          cla: "fuwu",
          name: "服务项目",
          push: "/serviceitem"
        },
        {
          cla: "fanwei",
          name: "经营范围",
          push: "/currentaccount"
        },
        {
          cla: "lianxi",
          name: "联系我们",
          push: "/contactus"
        }
      ]
    };
  }
};
</script>
<style  scoped>
.navtop {
  width: 100%;
  height: 100px;
  background: #ffffff;
}
.nav_item {
  width: 1200px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logos {
  width: 200px;
  display: block;
  font-size: 32px;
  font-weight: 400;
  color: #c40000;
  cursor: pointer;
}
ul {
  width: 600px;
  display: flex;
  margin-left: 100px;
}
ul li {
  font-size: 18px;
  flex: 1;
  color: #333;
  cursor: pointer;
  text-align: center;
}
ul li:hover {
  color: #c40000;
}
.on {
  color: #c40000;
}
.iphone {
  width: 200px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #333;
}
.iphone img {
  width: 30px;
  height: 30px;
  margin-right: 15px;
}
</style>>