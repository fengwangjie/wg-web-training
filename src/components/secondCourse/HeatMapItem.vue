<template>
  <div class="heatmap-item" :style="cssStyle" @mouseenter="showTip" @mouseleave="hiddenTip">
    <!-- <tip :title="`${week}  ${hour}`" :value="value"></tip> -->
  </div>
</template>
<script>
import Tip from "./Tip";
export default {
  components: { Tip },
  props: ["value", "week", "hour"],
  methods: {
    showTip() {},
    hiddenTip() {}
  },
  computed: {
    cssStyle() {
      if (0 < this.value && this.value <= 900) {
        return { backgroundColor: "#44a5f5", opacity: 0.3 };
      } else if (900 < this.value && this.value <= 1800) {
        return { backgroundColor: "#44a5f5", opacity: 0.8 };
      } else if (1800 < this.value && this.value <= 2700) {
        return { backgroundColor: "#4892f6" };
      } else if (2700 < this.value && this.value <= 3600) {
        return { backgroundColor: "#2e5ec5", opacity: 0.9 };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.heatmap-item {
  width: 100%;
  height: 100%;
}
</style>
