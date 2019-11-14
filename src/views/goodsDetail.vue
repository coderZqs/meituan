<template>
  <section class="goods-detail-container">
    <div class="container">
      <el-row justify="center" type="flex">
        <el-col :span="6">
          <div class="gc-left">
            <img
              src="https://gd2.alicdn.com/imgextra/i2/1970877023/TB2V9vifwHqK1RjSZFkXXX.WFXa_!!1970877023.jpg"
              alt
            >
          </div>
        </el-col>
        <el-col :span="10">
          <div class="gc-right">
            <h4>{{goods_data.title}}</h4>
            <div class="price">
              <p>
                参考价
                <span>{{goods_data.consult_price}}</span>
              </p>
              <p>
                活动价
                <span>${{goods_data.price}}</span>
              </p>
            </div>
            <div class="goods_size">
              <el-radio-group v-model="size" size="mini">
                <el-radio-button
                  v-for="selection in goods_data.selection"
                  :key="selection"
                  :label="selection"
                >{{selection}}</el-radio-button>
              </el-radio-group>
            </div>
            <div class="goods_color">
              <el-radio-group v-model="color" size="mini">
                <el-radio-button
                  v-for="color in goods_data.color"
                  :label="color"
                  :key="color"
                >{{color}}</el-radio-button>
              </el-radio-group>
            </div>
            <div class="count_app">
              <el-input-number size="mini" v-model="count"></el-input-number>
            </div>
            <div class="user_select">
              <el-button type="danger">立刻购买</el-button>
              <el-button>加入购物车</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      size: "256G",
      color: "红色",
      count: 1,
      goods_data: {
        id: 200,
        title: "阿茶与阿古复古枫叶红毛绒绒韩版宽松圆领套头秋冬针织大毛衣",
        price: 80,
        selection: ["64G", "128G", "256G"],
        color: ["红色", "黄色", "蓝色"]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.gc-left {
  padding: 20px;
  img {
    height: 100%;
    width: 100%;
  }
}
.price {
  width: 100%;
  height: 100px;
  background: #f2f6fc;
  padding: 0;
  margin: 0;
  > p {
    padding: 0;
    margin: 0;
    color: gray;
    font-size: 13px;
    span {
      font-size: 30px;
      color: red;
      font-weight: bold;
    }
  }
}
.gc-right {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
</style>
