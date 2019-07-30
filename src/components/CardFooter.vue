<template>
    <div class="card-footer-main">
        <span class="text" v-if="showDateSelector">今天</span>
        <span v-else></span>
        <div class="view-more" v-if="showViewMore">
            <span class="link text" @click="onClickViewMore">查看更多</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardFooter",
        components: {
        },
        props: {
            showDateSelector: {
                type: Boolean,
                default: true,
            },

            showViewMore: {
                type: Boolean,
                default: false,
            },

        },

        methods: {
            onClickViewMore: function () {
            }
        }
    }
</script>

<style scoped lang="scss">
    .card-footer-main {
        padding: 1.4rem 2.4rem;
        border-top: 1px solid #e8e8e8;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text {
            font-family: PingFangSC;
            font-size: 1.4rem;
            color: #737373;
        }

        .view-more .link {
            cursor: pointer;
        }
    }
</style>
