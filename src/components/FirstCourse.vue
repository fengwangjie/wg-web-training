<template>
  <div>
    <a-card title="访问分析">
      <a-tabs defaultActiveKey="1">
        <a-tab-pane :key="index + 1" v-for="(item, index) in chartsData">
          <template slot="tab">
            <ChartTile :title="item.metricName" :fluctuate="item.fluctuate" :total="item.total" />
          </template>
           <WgChart :chartData="item.options" />
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>
<script>
import ChartTile from "./ChartTitle";
import WgChart from "./WgChart";
import { getPageViewData } from "./pageViewUtils";

export default {
  components: {
    ChartTile,
    WgChart
  },
  data: function() {
    return {
      chartsData: this.fetchData()
    };
  },
  methods: {
    fetchData: function() {
      getPageViewData()
        .then(this.onFetchDataSuccess)
        .catch(this.onFetchDataFailure);
    },
    onFetchDataFailure: function(error) {
      console.log(error);
    },
    onFetchDataSuccess: function(chartsData) {
      console.log(chartsData);
      this.chartsData = chartsData;
    }
  }
};
</script>
<style lang="scss" scoped>
body {
  font-size: 12px;
}

/Deep/ .ant-tabs-nav {
  width: 100%;
  background-color: #f4f4f4;
  .ant-tabs-tab {
    width: 33%;
    color: #737373;
    padding: 2.1rem 2.4rem;
    margin: 0;
    min-width: 10rem;
    line-height: 1;
  }
}
/Deep/ .ant-card-wider-padding .ant-card-body {
  padding: 2px 2px;
}
/Deep/ .ant-tabs-nav .ant-tabs-tab-active {
    background-color: #fff;
}
/Deep/ .ant-tabs-ink-bar {
       background-color: #fff;
}
</style>

