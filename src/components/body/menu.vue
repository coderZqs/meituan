<template>
  <div class="menu">
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-col :span="8">
            <div class="left">
              <ul>
                <li v-for="item in menuList" :key="item.title" @mouseover="aMover">
                  <a href>{{item.title}}</a>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="center">
              <div class="content" v-for="good in showData.goods" :key="good.title">
                <p class="title">{{good.title}}</p>
                <p class="intro">{{good.intro}}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-carousel height="400px" direction="vertical" :autoplay="true">
          <el-carousel-item>
            <img
              class="banner_img"
              src="https://i3.meishichina.com/attachment/magic/2019/10/15/2019101515711108205818197577.jpg"
              alt
            >
          </el-carousel-item>
          <el-carousel-item>
            <img
              class="banner_img"
              src="https://pic3.zhimg.com/80/v2-e34f9372a05a00a6f5778f6357ec2b0d_hd.jpg"
              alt
            >
          </el-carousel-item>
          <el-carousel-item>
            <img
              class="banner_img"
              src="https://pic4.zhimg.com/80/v2-53414f0e6f72b4706420974b075239e4_hd.jpg"
              alt
            >
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inner: "热门品牌",
      menuList: [
        {
          title: "热门品牌",
          goods: [
            {
              title: "NIKE",
              intro: "耐克"
            },
            {
              title: "ADIDAS",
              intro: "阿迪达斯"
            },
            {
              title: "Luxury Roche",
              intro: "施华洛世奇"
            },
            {
              title: "CONVERSE",
              intro: "匡威"
            },
            {
              title: "李宁",
              intro: "LINING"
            }
          ]
        },
        {
          title: "潮流前线",
          goods: []
        },
        {
          title: "美食天下",
          goods: []
        },
        {
          title: "乌鲁木齐",
          goods: []
        },
        {
          title: "组件库",
          goods: []
        }
      ]
    };
  },
  computed: {
    showData() {
      return this.menuList.filter(item => {
        return item.title === this.inner;
      })[0];
    }
  },
  methods: {
    aMover(e) {
      this.inner = e.target.innerHTML;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  height: 400px;
  border: 1px solid #ccc;
  .left {
    > ul {
      > li {
        list-style: none;
        height: 80px;
        line-height: 80px;
        text-align: center;
        &:hover {
          background: black;
          color: red;
        }
        a {
          display: block;
          width: 100%;
        }
      }
    }
  }
  .center {
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .content {
      width: 33%;
      p {
        text-align: center;
      }
      .intro {
        font-size: 12px;
        margin: 0;
        padding: 0;
      }
      .title {
        font-size: 20px;
        margin: 0;
        padding: 0;
      }
    }
  }
  .banner_img {
    width: 100%;
    height: 100%;
  }
}
</style>
