<template>
  <div class="container">
    <card-header>访问分析</card-header>
    <div class="chart-container">
      <div class="main">
        <div class="title">
          <div :key="item.label" v-for="item in weeks">{{item.label}}</div>
        </div>
        <heat-map-chart :weeks="weeks" :datas="chartsData"></heat-map-chart>
        <div class="heatmap-legend">
          <div class="legend">
            <div class="color-group">
              <div class="legend-block" style="backgroundColor: #44a5f5; opacity: 0.3;"></div>
              <div class="legend-block" style="backgroundColor: #44a5f5; opacity: 0.8;"></div>
              <div class="legend-block" style="background-color: #4892f6;"></div>
              <div class="legend-block" style="background-color: #2e5ec5; opacity:0.9;"></div>
            </div>
            <div class="text-group">
              <span class="legend-text wg-number">0</span>
              <span class="legend-text wg-number">900</span>
              <span class="legend-text wg-number">1800</span>
              <span class="legend-text wg-number">2700</span>
              <span class="legend-text wg-number">3600</span>
            </div>
          </div>
        </div>
      </div>
      <div class="time-label">
        <div class="time" :key="hour" v-for="hour in hours">{{hour}}</div>
      </div>
    </div>
    <card-footer :show-date-selector="true" :show-view-more="true"></card-footer>
  </div>
</template>
<script>
import { getHeatMapData } from "../../utils/heatMapUtil";
import CardHeader from "../CardHeader";
import CardFooter from "../CardFooter";
import HeatMapChart from "./HeatMapChart";
import moment from "moment";
export default {
  components: {
    CardHeader,
    CardFooter,
    HeatMapChart
  },
  data: function() {
    return {
      chartsData: [],
      weeks: [
        { label: "周一", index: 0 },
        { label: "周二", index: 1 },
        { label: "周三", index: 2 },
        { label: "周四", index: 3 },
        { label: "周五", index: 4 },
        { label: "周六", index: 5 },
        { label: "周天", index: 6 }
      ],
      hours: [
        "00:00",
        "02:00",
        "04:00",
        "06:00",
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
        "24:00"
      ]
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    moment: function() {
      return moment();
    },
    fetchData: function() {
      console.log("getHeatMapData......");
      getHeatMapData()
        .then(this.onFetchDataSuccess)
        .catch(this.onFetchDataFailure);
    },
    onFetchDataFailure: function(error) {
      console.log(error);
    },
    onFetchDataSuccess: function(chartsData) {
      this.chartsData = chartsData.data[0].rows;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .chart-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: calc(100% - 11.5rem);
    .main {
      padding: 0 0.875rem 1rem 1.5rem;
      width: 87%;
      height: calc(100% - 5.85rem);
      margin-bottom: 0.625rem;
      .title {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        height: 3rem;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.29px;
        color: #737373;
      }
      .heatmap-legend {
        margin-top: 0.625rem;
        height: 1.875rem;
        .legend {
          display: flex;
          flex-direction: column;
          .color-group {
            display: flex;
            margin-bottom: 0.375rem;
            .legend-block:not(:last-child) {
              margin-right: 0.25rem;
            }
            .legend-block {
              flex: 1;
              height: 0.625rem;
            }
          }
          .text-group {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
    .time-label {
      padding: 0 0.875rem 1rem 0.5rem;
      height: calc(100% - 5.85rem);
      margin-bottom: 1.6rem;
      margin-top: 3.0rem;
      overflow: hidden;
      width: 12%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .time {
        font-family: DINOT;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #737373;
      }
    }
  }
}
</style>

