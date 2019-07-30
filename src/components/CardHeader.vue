<template>
    <div class="card-head-main">
        <div class="title">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardHeader"
    }
</script>

<style scoped lang="scss">
    .card-head-main {
        padding: 1.9rem 2.4rem;
        border-bottom: 1px solid #e8e8e8;
        background-color: #ffffff;

        .title {
            font-size: 1.8rem;
            font-weight: 500;
            color: #333333;
        }
    }
</style>
