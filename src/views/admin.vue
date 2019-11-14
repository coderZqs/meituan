<template>
  <div class="admin">
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="所有订单" name="first">
            <m-admin></m-admin>
          </el-tab-pane>
          <el-tab-pane label="待付款" name="second">待付款</el-tab-pane>
          <el-tab-pane label="代发货" name="third">代发货</el-tab-pane>
          <el-tab-pane label="待收货" name="fourth">待收货</el-tab-pane>
          <el-tab-pane label="待评价" name="fourth">待评价</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import mAdmin from "../components/body/admin/allOrder";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    mAdmin
  }
};
</script>