<template>
  <div class="check" :style="{background:color}">
    <header>
      <nav>
        <dl>
          <dt>
            <h1>{{title}}</h1>
          </dt>
          <dd @mouseover="ddMover" v-for="item in nav_item" :key="item.title">{{item}}</dd>
        </dl>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    nav_item: Array,
    title: String
  },
  data() {
    return {};
  },
  methods: {
    ddMover() {}
  }
};
</script>

<style lang="scss" scoped>
.check {
  height: 40px;
}
dl {
  display: flex;
  padding: 10px !important;
  * {
    margin: 0;
    padding: 0;
    color: white;
  }
  dt {
    font-size: 15px;
  }
  dd {
    font-size: 16px;
    position: relative;
    margin: 0 10px;
  }
}

.transpoint {
  &:before {
    position: absolute;
    content: "";
    bottom: -50%;
    width: 0;
    transform: translate(-50%, 0%);
    left: 50%;
    height: 0;
    border-width: 0 7px 7px;
    border-style: solid;
    border-color: transparent transparent white;
  }
}
</style>
