<template>
  <div class="legend-container">
    <Legend
      :name="item.name"
      :fluctuate="item.fluctuate"
      :summaryCount="item.summaryCount"
      :key="index + 1"
      v-for="(item, index) in legends"
    ></Legend>
  </div>
</template>

<script>
import Legend from "./Legend";
export default {
  components: {
    Legend
  },
  props: {
    legends: Array
  }
};
</script>

<style  lang="scss" scope>
.legend-container {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 32px 0;
}
</style>
