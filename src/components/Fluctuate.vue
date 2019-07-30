<template>
    <div :class="mainClass">
        <span class="icon">{{icon}}</span><span class="number">{{Math.abs(value)}}%</span>
    </div>
</template>

<script>
    const UP_ICON = '▲';
    const DOWN_ICON = '▼';

    export default {
        name: "Fluctuate",
        props: {
            value: {
                type: Number,
                default: 0,
            }
        },
        data: function () {
            return {}
        },
        computed: {
            icon: function () {
                return this.value >= 0 ? UP_ICON : DOWN_ICON;
            },

            mainClass: function () {
                return "fluctuate" + (this.value >= 0 ? '' : ' down');
            },


        }
    }
</script>

<style scoped lang="scss">
    .fluctuate {
        color: #00bbbd;
        display: flex;
        align-items: center;

        &.down {
            color: #f16565;
        }

        .icon {
            font-size: 8px;
            margin-right: 0.4rem;
        }

        .number {
            font-size: 1.2rem;
        }
    }

</style>
