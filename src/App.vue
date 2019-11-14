<template>
  <div id="app">
    <div class="header">
      <m-header></m-header>
    </div>
      <router-view/>
  </div>
</template>

<script>
import mHeader from "./components/header/header";
export default {
  name: "header",
  data() {
    return {};
  },
  methods: {},
  components: {
    mHeader
  }
};
</script>


<style lang="scss">
html,
body,
#app {
  height: 100%;
  padding: 0;
  margin: 0;
  dl,
  ul {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: brown;
    transition: all 0.8s;
    &:hover {
      color: gray;
    }
  }
  h4 {
    padding: 0;
    margin: 0;
  }
}
  @import "./assets/reset.scss";

.header{
  background: #f5f5f5;;
}
.app{
  margin-top:40px;
}
</style>
