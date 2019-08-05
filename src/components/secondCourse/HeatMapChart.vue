<template>
  <div class="heatmap-chart">
    <div class="week" :key="week.index" v-for="week in weeks">
      <div class="hour" :key="`${data[0]}_${data[1]}`" v-for="data in currentWeekData(week.index)">
        <heat-map-item
          :value="parseInt(data[2])"
          :week="week.label"
          :hour="data[1]"
          :key="data[0]+'_'+data[1]"
        ></heat-map-item>
      </div>
    </div>
  </div>
</template>
<script>
import HeatMapItem from "./HeatMapItem";
export default {
  components: {
    HeatMapItem
  },
  props: ["weeks", "datas"],
  computed: {
    currentWeekData: function() {
      var vm = this;
      return function(week) {
        return vm.datas.filter(x => x[0] == week);
      };
    }
  }
};
</script>

<style lang='scss'>
.chart-container {
  height: 100%;
  .heatmap-chart {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: space-between;
  }
  .week {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: space-between;
    min-height: 2px;
    display: flex;
    margin-bottom: 0.2%;
    &:not(:last-of-type) {
      margin-right: 5px;
    }
    .hour {
      width: 100%;
      height: 3%;
      margin-top: 5px;
    }
  }
}
</style>
