<template>
  <div class="check-container">
    <slot/>
  </div>
</template>

<script>
import cHeader from "../common/check-header";
import cBody from "../common/check-body";
export default {
  data() {
    return {};
  }
};
</script>

<style>
.check-container {
  box-shadow: 0 4px 8px 0 #ccc;
  border-radius: 4px;
  overflow: hidden;
}
</style>
