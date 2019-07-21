<template>
  <div class="chart-container">
    <ECharts :options="defaultOptions" ref="chart" class="wg-chart"></ECharts>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts";
import { lineChartDefaultOptions } from "./pageViewUtils";

export default {
  name: "PageView",
  components: { ECharts },
  data: function() {
    return {
      defaultOptions: lineChartDefaultOptions
    };
  },
  props: {
    chartData: Object,
    customLegnds: Array
  },
  created() {},

  mounted() {
    this.renderChart(this.chartData);
  },
  methods: {
    renderChart: function(data) {
      this.$refs.chart.showLoading();
      this.$refs.chart.mergeOptions(data);
      this.$refs.chart.hideLoading();
    }
  }
};
</script>

<style lang='scss' scoped>
.chart-container {
  width: 100%;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  .wg-chart {
    height: 290px;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    position: relative;
  }
}
  .legend-container .legend {
        width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 32px 0;
    margin: 0 auto;
    .legend {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
      .dimension-attr {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
      }
  }
}
  /Deep/ .anticon {
    margin-right: 0px;
  }
  .caret-up .caret-down {
    font-size: 17px;
    margin-right: 0;
    width: auto;
    height: auto;
  }

.total-num {
  margin-top: 1.2rem;
  font-size: 1.5rem;
  color: #333;
}
.wg-number {
  font-family: DINOT !important;
}
</style>

