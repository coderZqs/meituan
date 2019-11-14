<template>
  <div class="menu-container">
    <div class="menu-header">
      <el-row>
        <el-col :span="5">
          <div class="mh-left" @mouseleave="mLeave">
            <div class="show_box" @mouseover="mover" v-if="is_mover">
              <div class="show_content" v-for="data in showData.items" :key="data.title">
                <div class="sc-header">
                  <h4>{{showData.title}}</h4>
                  <a href>更多</a>
                </div>
                <el-divider/>
                <div class="list">
                  <span v-for="item in data.item" :key="item">{{item}}</span>
                </div>
              </div>
            </div>
            <dl>
              <dt>
                <h4>全部分类</h4>
              </dt>
              <dd
                v-for="item in list"
                :class="item.type"
                :data-type="item.type"
                @mouseover="mover"
                :key="item.title"
              >{{item.title}}</dd>
            </dl>
          </div>
        </el-col>
        <el-col :span="19">
          <div class="nv-center">
            <el-row :gutter="10">
              <el-col :span="14">
                <el-carousel height="200px">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </el-col>
              <el-col :span="4">
                <div class="sign"></div>
              </el-col>
              <el-col :span="6">
                <div class="card">
                  <el-avatar
                    :size="50"
                    src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                  ></el-avatar>
                  <p>HI, 您好</p>
                  <div class="button-group">
                    <el-button>登陆</el-button>
                    <el-button>注册</el-button>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top:10px">
              <el-col :span="7">
                <div class="card-first"></div>
              </el-col>
              <el-col :span="7">
                <div class="card-secomd"></div>
              </el-col>
              <el-col :span="4">
                <div class="card-third"></div>
              </el-col>
              <el-col :span="6">
                <div class="card-forth"></div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      is_mover: false,
      list: [
        {
          title: "名宿",
          type: "house",
          items: [
            {
              title: "热门城市",
              item: ["上海", "北京", "吉安", "南昌"]
            }
          ]
        },
        {
          title: "美食",
          type: "food",
          items: [
            {
              title: "美食",
              item: ["套炒里脊", "乘风鸡翅"]
            }
          ]
        }
      ]
    };
  },
  computed: {
    showData() {
      return this.list.filter(item => item.type === this.type)[0];
    }
  },
  methods: {
    mover(e) {
      this.is_mover = true;
      let type = e.currentTarget.dataset.type;
      this.type = type;
    },
    mLeave() {
      this.is_mover = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.mh-left {
  background: white;
  position: relative;
  box-shadow: 0 1px 2px 0 #ccc;
  min-height: 500px;
  .show_box {
    z-index: 999;
    background: white;
    box-sizing: border-box;
    box-shadow: 0 1px 1px 0 #ccc;
    padding: 20px;
    height: 450px;
    width: 500px;
    position: absolute;
    bottom: 0;
    left: 100%;
    .show_content {
      height: 100%;
      .list {
        span {
          padding: 10px;
        }
      }
      .sc-header {
        display: flex;
        height: 30px;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  dl {
    dt {
      font-size: 20px;
      padding: 10px;
    }
    > dd {
      &:hover {
        background: orange;
      }
      height: 30px;
      line-height: 30px;
      position: relative;
      padding: 0 10px;
      margin: 0;
      font-size: 13px;
      &::after {
        content: ">";
        position: absolute;
        right: 5px;
        color: gray;
      }
    }
  }
}

.nv-center {
  background: #ebeef5;
  padding: 10px;
  margin-top: 50px;
  box-sizing: border-box;
  height: 450px;
  .sign {
    height: 220px;
    background-image: url("http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg");
    background-size: cover;
  }
  .card {
    display: flex;
    align-items: center;
    flex-flow: column;
    background: white;
    height: 220px;
    justify-content: space-around;
  }
  .card-first {
    box-shadow: 0 1px 1px 0 #cccc;
    border: 1px solid #ccc;
    height: 200px;
    background-image: url("http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png");
    background-size: cover;
  }
  .card-secomd {
    box-shadow: 0 1px 1px 0 #cccc;
    border: 1px solid #ccc;
    height: 200px;
    background-image: url("http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg");
    background-size: cover;
  }
  .card-third {
    height: 200px;
    box-shadow: 0 1px 1px 0 #cccc;
    border: 1px solid #ccc;
    background-image: url("http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg");
    background-size: cover;
  }
  .card-forth {
    height: 200px;
    box-shadow: 0 1px 1px 0 #cccc;
    border: 1px solid #ccc;
    background-image: url("http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg");
    background-size: cover;
  }
}
</style>
