<template>
  <div>
    <div class="aboutus">
      <div class="aboutcenter">
        <p class="about">关于我们</p>
        <div class="conent">
          <div
            class="leftcont"
          >上海诚信租赁公司成立于2009年，本公司拥有总资产800万元，年营业额:2000万元 。公司主营垃圾清运、机械租赁、土石方工程施工、爆破与拆除工程施工、市政公用工程施工这五大版块。公司始终坚持“服务良好、信誉至上”的宗旨，更以“开拓、竞争、敬业、创新”为企业精神，贯彻“抓管理、树品牌、创效益”的企业经营方针，在狠抓工程质量的同时，更重视文明施工的过程，拥有良好的社会信誉，深受广大客户的好评。公司以诚信为本，“服务求生存、信誉求发展”为企业经营理念，发展创新为指南；公司以上海环境集团为依托，秉承市场为导向，始终以客户需求为核心，务实的精神专注的水平，真诚的服务态度，塑造品牌的形象，努力使公司成为行业的典范。</div>
          <img src="../assets/right.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          num:0
        }
    },
    methods:{
        mouse(){
            this.num=1
        }
    }
};
</script>

<style  scoped>
.aboutus {
  width: 100%;
  height: 376px;
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
.conent {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.leftcont {
  width: 700px;
  font-size: 16px;
  line-height: 30px;
  color: #333333;
  text-indent: 50px;
}

</style>>