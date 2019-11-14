<template>
  <div class="login-container">
    <el-row type="flex" justify="center">
      <el-col :span="6" style="margin-top:100px;">
<!--         <el-button @click="dispatch">倒计时</el-button> -->
        <div class="form_control">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Login</span>
            </div>
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="50px">
              <el-form-item label="帐号" props="username">
                <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" props="password">
                <el-input v-model="ruleForm.userpsd"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click.prevent="login" type="primary" style="width:100%" value="登陆"></el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "",
        userpsd: ""
      },
      rules: {}
    };
  },
  methods: {
    login() {
      this.axios
        .post("/alqq/login", {
          username: this.ruleForm.username,
          userpsd: this.ruleForm.userpsd
        })
        .then(res => {
          console.log(res);
        });
    },
/*     dispatch(){
      this.$store.dispatch("ASYNC_CHANGE_STATUS")
    } */
  },
  created: {}
};
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  background: url("../../public/img/login/7.jpg");
  background-size: cover;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
</style>
