<template>
  <div class="m-header">
    <el-col type="flex" class="row-bg" justify="end">
      <el-col :offset="2" :span="5">
        <div class="nav-left">
          <span>宜春</span>
          <button>切换城市</button>
          <span>
            [
            <a href="#">南昌</a>
            <a href>九江</a>
            <a href>赣州</a> ]
          </span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="ls_box">
          <span v-if="isLogin">hello，欢迎{{viper}}</span>
          <div v-else class="welcome_word">
            <span>您好，</span>
            <router-link to="/login">登陆</router-link>丨
            <router-link to="/register">注册</router-link>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="nav-right">
          <ul>
            <li>
              <router-link to="/admin">我的清购</router-link>
            </li>
            <li>
              <router-link to="/">收藏夹</router-link>
            </li>
            <li>
              <router-link to="/cart">购物车</router-link>
            </li>
          </ul>
        </div>
      </el-col>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.m-header {
  background:#CCCC;
  width: 100%;
  font-size: 13px;
  height: 40px;
  line-height: 40px;
  background: rgba(0, 0, 0, 0);
  .welcome_word {
    span {
      color: blue;
    }
  }
  .nav-left {
    span {
      letter-spacing: 2px;
    }
  }
  .nav-right {
    width: 100%;
    height: 100%;
    ul {
      padding: 0;
      margin: 0;
      li {
        float: left;
        list-style: none;
        width: 80px;
        text-align: center;
      }
    }
  }
}
</style>
