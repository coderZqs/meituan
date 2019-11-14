<template>
  <el-row type="flex" justify="center">
    <el-col :span="18" style="border:1px solid #CCC;">
      <el-tabs v-model="activeName">
        <el-tab-pane label="全部商品" name="first">
          <el-table :data="tableData" @selection-change="select">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="商品信息">
              <template slot-scope="scope">
                <p>{{scope.row.title}}</p>
              </template>
            </el-table-column>
            <el-table-column label="单价" prop="price"></el-table-column>
            <el-table-column label="数量" prop="count">
              <template slot-scope="scope">
                <el-input-number v-model="scope.row.count" :min="1" :max="100" label="数量"></el-input-number>
              </template>
            </el-table-column>
            <el-table-column label="金额">
              <template slot-scope="scope">
                <p>{{scope.row.price * scope.row.count}}</p>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="delete_row(scope.$index,scope.row)">移出购物车</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="bottom_bar">
            <div class="left">
              <a href>删除</a>
              <a href>移入收藏夹</a>
              <a href>分享</a>
            </div>
            <div class="right">
              <span>已选商品{{select_count}}件</span>
              <span>合计：{{allPrice}}</span>
              <el-button @click="pay">下单</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="降价商品" name="second">配置管理</el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      select_row: [],
      tableData: [
        {
          title: "巴豆",
          price: 60,
          count: 1,
          real_pay: 60
        },
        {
          title: "热饮",
          price: 99,
          count: 1,
          real_pay: 99
        }
      ]
    };
  },
  computed: {
    allPrice() {
      let allPrice = 0;
      this.select_row.forEach(item => {
        allPrice += item.real_pay * item.count;
      });
      return allPrice;
    },
    select_count() {
      return this.select_row.length;
    }
  },
  methods: {
    select(row) {
      this.select_row = row;
    },
    delete_row(index, row) {
      this.tableData = this.tableData.splice(index, 1);
      this.select_row = this.select_row.filter((item, index) => {
        return (item.id = row.id);
      });
    },
    pay() {}
  }
};
</script>

<style lang="scss">
.bottom_bar {
  background:black;
  color:white;
  display: flex;
  height: 60px;
  width: 75%;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: space-around;
  .left {
    a {
      margin: 0 20px;
    }
  }
  .right{
    >*{
      margin:0 20px;
    }
  }
}
</style>
