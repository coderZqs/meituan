<template>
  <div class="container">
    <el-row>
      <el-col :span="24">
        <div class="navbar">
          <m-navbar></m-navbar>
        </div>
      </el-col>
    </el-row>
    <div class="m-navbar">
      <el-row type="flex" justify="center">
        <el-col :span="18" style="margin-top:20px;">
          <m-menu></m-menu>
        </el-col>
      </el-row>
    </div>
    <el-row type="flex" justify="center">
      <el-col :span="18" style="margin-top:80px;">
        <m-check>
          <c-header title="我们" color="blue" :nav_item="nav_item"></c-header>
          <c-body>
            <div
              slot="body"
              @click="router_go"
              :data-id="item.id"
              class="content"
              v-for="item in list"
              :key="item.title"
            >
              <img class="img" :src="item.imgUrl" alt>
              <span class="title">{{item.title}}</span>
              <div class="tipGroup">
                <span class="tip" v-for="tip in item.log" :key="tip">{{tip}}</span>
              </div>
              <p class="我们">￥{{item.price}}起</p>
            </div>
          </c-body>
        </m-check>
        <m-check>
          <c-header title="我们" color="blue" :nav_item="nav_item"></c-header>
          <c-body>
            <div slot="body" class="content" v-for="item in otherlist" :key="item.title">
              <img class="img" :src="item.imgUrl" alt>
              <span class="title">{{item.title}}</span>
              <div class="tipGroup">
                <span class="tip" v-for="tip in item.log" :key="tip">{{tip}}</span>
              </div>
              <p class="我们">￥{{item.price}}起</p>
            </div>
          </c-body>
        </m-check>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

import mNavbar from "@/components/header/navbar";
import mMenu from "@/components/body/menu2";
import mCheck from "@/components/body/check";
import cHeader from "@/components/common/check-header";
import cBody from "@/components/common/check-body";
export default {
  name: "home",
  methods: {
    router_go(e) {
      let id = e.currentTarget.dataset.id;
      this.$router.push(`/goods/detail/${id}`);
    }
  },
  data() {
    return {
      nav_item: ["约会", "约会聚餐", "丽人SPA", "品质出游"],
      list: [
        {
          id: 1,
          title: "乌鲁木齐希尔顿酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        },
        {
          id: 2,
          title: "乌鲁木齐富力万达酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        },
        {
          id: 3,
          title: "乌鲁木ObOr顿酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        },
        {
          id: 4,
          title: "乌鲁木齐天源酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        },
        {
          id: 5,
          title: "乌鲁木齐男法酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        },
        {
          id: 6,
          title: "乌鲁木道尔顿酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        }
      ],

      otherlist: [
        {
          title: "乌鲁木齐希尔顿酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        },
        {
          title: "乌鲁木齐富力万达酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        },
        {
          title: "乌鲁木ObOr顿酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        },
        {
          title: "乌鲁木齐天源酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        },
        {
          title: "乌鲁木齐男法酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        },
        {
          title: "乌鲁木道尔顿酒店",
          log: ["新客超值优惠", "房量充足", "发票推荐"],
          price: "629",
          imgUrl:
            "https://p0.meituan.net/tdchotel/2b0690aa3adc70f39b1351e3971e479b377459.jpg@460w_260h_1e_1c"
        }
      ]
    };
  },
  components: {
    mNavbar,
    mMenu,
    mCheck,
    cHeader,
    cBody
  }
};
</script>
<style lang="scss" scoped>
.container {
  background: #f5f5f5;
}
.navbar {
  height: 200px;
  width: 100%;
  background:white;
  overflow: hidden;
}
</style>

