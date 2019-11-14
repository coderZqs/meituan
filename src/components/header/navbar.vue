<template>
  <div class="navbar-container">
    <el-row>
      <el-col offset="2" :span="5">
        <div class="logo">LOGO</div>
      </el-col>
      <el-col :span="8">
        <div class="inputSearch">
          <el-input
            @focus="showRecommedList"
            @blur="showHotList"
            @input="search"
            v-model="search_content"
          ></el-input>
          <div class="searchList" v-show="isShowHotList">
            <dl>
              <dd v-for="item in searchList" :key="item">{{item}}</dd>
            </dl>
          </div>
          <div class="hotList" v-if="isShowRecommedList">
            <dl class="hot-box">
              <dt>
                <span>搜索</span>
                <span>
                  <a href>删除搜索历史</a>
                </span>
              </dt>
              <dd>
                <span v-for="item in recommedList" :key="item">
                  <a href>{{item}}</a>
                </span>
              </dd>
            </dl>
            <dl class="history-box">
              <dt>
                <span>热门搜索</span>
              </dt>
              <dd>
                <span v-for="item in recommedList" :key="item">
                  <a href>{{item}}</a>
                </span>
              </dd>
            </dl>
          </div>
          <div class="recommedList">
            <dl>
              <dd v-for="item in recommedList" :key="item">火锅</dd>
            </dl>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlur: false,
      timer: null,
      search_content: "",
      recommedList: ["火锅", "火锅", "火锅", "火锅", "火锅"],
      hotList: ["故宫", "故宫", "故宫", "故宫", "故宫"],
      searchList: ["1", "2", "3", "45"]
    };
  },
  computed: {
    isShowRecommedList() {
      return this.isBlur && !this.search_content;
    },
    isShowHotList() {
      return this.isBlur && this.search_content;
    }
  },
  methods: {
    search(e) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        //传递内容
        this.axios.get();
      }, 300);
    },
    showRecommedList() {
      this.isBlur = true;
    },
    showHotList() {
      this.isBlur = false;
    }
  }
};
</script>

<style lang="scss">
.inputSearch {
  width: 100%;
  position: relative;
}
.navbar-container {
  margin-top:20px;
  background: white;
  font-size: 12px;
  .recommedList > dl {
    display: flex;
    margin: 0;
    padding: 0;
    dd{
      margin:10px;
    }
  }
  .searchList {
    z-index: 999;
    position: absolute;
    left: 0;
    right: 0;
    dl {
      background: white;
      box-shadow: 0px 1px 2px 0px #ccc;
      dd {
        height: 20px;
        margin: 0;
      }
    }
  }
  .hotList {
    z-index: 999;
    padding: 10px;
    left: 0;
    right: 0;
    position: absolute;
    background: white;
    box-shadow: 0px 1px 2px 0px #ccc;
    a {
      color: gray;
      &:hover {
        color: black;
      }
    }
    dl {
      > dd {
        span {
          padding: 20px;
        }
        padding: 2px;
        margin: 0;
      }
    }
    .hot-box {
      padding: 10px;
      dt {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }
  }
}
.logo {
  margin-top: 20px;
}
</style>
