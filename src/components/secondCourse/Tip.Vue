<template>
  <div :style="defaultCss">
    <div class="tooltip-title-formatter">{{title}}</div>
    <span
      style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(0,156,158,1);"
    ></span> 访问量
    <div class="wg-number tooltip-value-formatter">{{value}}</div>
  </div>
</template>
<script>
export default {
  props: ["title", "value", "position", "visiable"],
  data() {
    return {
      defaultCss: `position: absolute; border-style: solid; 
        white-space: nowrap; z-index: 9999999; 
        transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s,
        top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; border-width: 
        0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(115, 115, 115); 
        font: 12px/21px sans-serif; left: 553px; top: 26px; opacity: 0.8; min-width: 144px; 
        padding: 12px; box-shadow: rgb(232, 232, 232) 0px 0px 10px; 
        background-color: rgb(255, 255, 255); pointer-events: none;`
    };
  }
};
</script>

<style>
</style>
