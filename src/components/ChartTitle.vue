<template>
  <div>
    <div class="title-container">
      <span class="title">{{title}}</span>
      <div class="percent wg-number"  :style="this.fluctuate > 0 ? 'color: rgb(0, 187, 189);':'rgb(241, 101, 101);'">
        <a-icon :type="this.fluctuate > 0?'caret-up':'caret-down'" style="margin-right: 0px;" />
        <span>{{`${fluctuate}%`}}</span>
      </div>
    </div>
    <div class="total-num wg-number">{{total}}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    title: String,
    fluctuate: Number,
    total: String
  },
  computed: {
    fluctuateIcon() {
      if (this.fluctuate > 0) {
        return "up";
      } else {
        return "down";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.title-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  .title {
    font-size: 0.8rem;
    margin-right: 1.2rem;
    color: #333;
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
