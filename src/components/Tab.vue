<template>
    <div :class="mainClass" @click.stop="onCLick">
        <div class="top">
            <span class="title">{{tabData.title}}</span>
            <fluctuate :value="tabData.fluctuate"></fluctuate>
        </div>
        <span class="value">{{tabData.value}}</span>
    </div>
</template>

<script>
    import Fluctuate from "./Fluctuate";

    export default {
        name: "Tab",
        components: {Fluctuate},
        props: ['tabData', 'selectedTab'],
        methods: {
            onCLick: function () {
                if (this.tabData.tabKey !== this.selectedTab) {
                    this.$emit('update:selected-tab', this.tabData.tabKey);
                }
            }
        },
        computed: {
            mainClass: function () {
                return 'tab' + (this.selectedTab === this.tabData.tabKey ? ' selected' : '');
            }
        }
    }
</script>

<style scoped lang="scss">
    .tab {
        display: flex;
        flex-direction: column;
        padding: 1.6rem 2.4rem;
        background: #f7f7f7;
        cursor: pointer;

        &:not(:last-of-type) {
            border-right: 1px solid #dfdfdf;
        }

        &.selected {
            border-top: 2px solid #00bbbd;
            background: #fff;
            cursor: default;

            .title {
                color: #333;
            }
        }

        .top {
            display: flex;
            align-items: center;
            margin-bottom: 1.2rem;

            .title {
                ont-size: 1.4rem;
                color: #737373;
                margin-right: 1.2rem;
            }

        }

        .value {
            font-size: 2.4rem;
            font-weight: 500;
            color: #333333;
        }
    }
</style>
