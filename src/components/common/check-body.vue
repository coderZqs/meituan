<template>
  <div class="container">
    <slot name="body"></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .content {
    * {
      padding: 3px;
    }
    width: 28%;
    display: flex;
    flex-flow: column;
    .img {
      height: 200px;
      width: 100%;
    }
  }
}
</style>
