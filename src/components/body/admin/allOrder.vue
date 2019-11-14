<template>
  <el-row>
    <el-col>
      <el-row>
        <el-col :span="10">
          <el-input v-model="search_val" width="200"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button @click="search_selected">查找</el-button>
        </el-col>
      </el-row>
    </el-col>
    <el-col>
      <el-table
        ref="multipleTable"
        :data="tableData"
        header-align="center"
        @select="onTableSelect"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="宝贝" width="400">
          <template slot-scope="scope">
            <div class="first">
              <div class="left">
                <img
                  src="https://img.alicdn.com/imgextra/i1/66695381/O1CN015jacdH1pcXnOOe95L_!!66695381.jpg_80x80.jpg"
                  alt
                >
              </div>
              <div class="right">
                <span>子俊男装秋冬季青少年圆领毛衣男士韩版宽松针织衫卡通毛绒线衣潮 [交易快照]</span>

                <div class="type">
                  <span>颜色:尺码</span>
                  <span>尺码：M</span>
                </div>
                <span>发货时间:付款后5天内</span>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="单价" width="50">
          <template slot-scope="scope">
            <span>{{scope.row.price}}</span>
          </template>
        </el-table-column>
        <el-table-column label="数量" width="50">
          <template slot-scope="scope">
            <span>{{scope.row.price}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
            <a href="#">退款/退货</a>
          </template>
        </el-table-column>
        <el-table-column label="实付款" width="120" show-overflow-tooltip prop="real_pay"></el-table-column>
        <el-table-column label="交易状态" width="120" show-overflow-tooltip prop="state"></el-table-column>
        <el-table-column label="交易操作" width="120" show-overflow-tooltip>
          <template slot-scope="scope">
            <a href="#">确定收货</a>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          order_date: "2016-05-03",
          title: "子俊男装秋冬季青少年圆领毛衣男士韩版宽松针织衫卡通毛绒线衣潮",
          img:
            "https://img.alicdn.com/imgextra/i1/66695381/O1CN015jacdH1pcXnOOe95L_!!66695381.jpg_80x80.jpg",
          goods_count: 99,
          price: 108,
          real_pay: 99,
          state: "交易完成"
        },
        {
          id: 2,
          order_date: "2016-05-03",
          title: "子俊男装秋冬季青少年圆领毛衣男士韩版宽松针织衫卡通毛绒线衣潮",
          img:
            "https://img.alicdn.com/imgextra/i1/66695381/O1CN015jacdH1pcXnOOe95L_!!66695381.jpg_80x80.jpg",
          goods_count: 99,
          price: 108,
          real_pay: 99,
          state: "交易完成"
        },
        {
          id: 3,
          order_date: "2016-05-03",
          title: "子俊男装秋冬季青少年圆领毛衣男士韩版宽松针织衫卡通毛绒线衣潮",
          img:
            "https://img.alicdn.com/imgextra/i1/66695381/O1CN015jacdH1pcXnOOe95L_!!66695381.jpg_80x80.jpg",
          goods_count: 99,
          price: 108,
          real_pay: 99,
          state: "交易完成"
        },
        {
          id: 4,
          order_date: "2016-05-03",
          title: "子俊男装秋冬季青少年圆领毛衣男士韩版宽松针织衫卡通毛绒线衣潮",
          img:
            "https://img.alicdn.com/imgextra/i1/66695381/O1CN015jacdH1pcXnOOe95L_!!66695381.jpg_80x80.jpg",
          goods_count: 99,
          price: 108,
          real_pay: 99,
          state: "交易完成"
        },
        {
          id: 5,
          order_date: "2016-05-03",
          title: "子俊男装秋冬季青少年圆领毛衣男士韩版宽松针织衫卡通毛绒线衣潮",
          img:
            "https://img.alicdn.com/imgextra/i1/66695381/O1CN015jacdH1pcXnOOe95L_!!66695381.jpg_80x80.jpg",
          goods_count: 99,
          price: 108,
          real_pay: 99,
          state: "交易完成"
        },
        {
          id: 6,
          order_date: "2016-05-03",
          title: "子俊男装秋冬季青少年圆领毛衣男士韩版宽松针织衫卡通毛绒线衣潮",
          img:
            "https://img.alicdn.com/imgextra/i1/66695381/O1CN015jacdH1pcXnOOe95L_!!66695381.jpg_80x80.jpg",
          goods_count: 99,
          price: 108,
          real_pay: 99,
          state: "交易完成"
        },
        {
          id: 7,
          order_date: "2016-05-03",
          title: "子俊男装秋冬季青少年圆领毛衣男士韩版宽松针织衫卡通毛绒线衣潮",
          img:
            "https://img.alicdn.com/imgextra/i1/66695381/O1CN015jacdH1pcXnOOe95L_!!66695381.jpg_80x80.jpg",
          goods_count: 99,
          price: 108,
          real_pay: 99,
          state: "交易完成"
        }
      ],
      search_val: "",
      selected: [],
      multipleSelection: []
    };
  },

  methods: {
    onTableSelect(row, selected) {
      this.selected = row;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    search_selected() {
      let newArr = [];
      this.selected.forEach(st_val => {
        newArr.push(
          this.tableData.filter(item => {
            return item.id === st_val.id;
          })
        );
      });
      let tableData = [];
      newArr.forEach(item => {
        tableData.push(Object.assign({}, ...item));
      });
      this.tableData = tableData;
    },
    search_input() {}
  }
};
</script>
<style lang="scss" scoped>
.first {
  display: flex;
  .left {
    img {
      padding: 10px;
    }
  }
  .right {
    span {
      font-size: 12px;
      &:nth-child(1) {
      }
    }
    display: flex;
    flex-flow: column;
  }
}
</style>
