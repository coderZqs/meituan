<template>
  <div class="container">
    <el-row type="flex" justify="center" style="margin:100px;">
      <el-col :span="5">
        <el-steps :active="active" direction="vertical" finish-status="success">
          <el-step title="步骤 1" description="阅读协议内容"></el-step>
          <el-step title="步骤 2" description="填写资料"></el-step>
          <el-step title="步骤 3" description="注册成功"></el-step>
        </el-steps>
      </el-col>
      <el-col :span="12">
        <m-register :active.sync="active"></m-register>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mRegister from "../components/users/registerComponent";
export default {
  data() {
    return {
      active: 2
    };
  },
  components: {
    mRegister
  }
};
</script>

<style>
</style>
