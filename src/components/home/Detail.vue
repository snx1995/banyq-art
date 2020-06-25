<template>
    <div class="detail">
        <div class="detail-content">
            <Card :data="data" />
        </div>
        <div class="detail-tabs">
            <div class="detail-tab active">
                返回
            </div>
        </div>
    </div>
</template>
<script>
import Card from 'home/Card';
export default {
    name: 'Detail',
    components: {
        Card
    },
    data() {
        return {
            data: this.$route.params
        }
    },
    methods: {

    },
    mounted() {
        console.log(this.$route)
    }
}
</script>
<style lang="less" scoped>
.detail {
    .detail-tabs {
        height: 64px;
        width: 100vw;
        margin-top: 10px;
        background-color: #fff;
        display: flex;
        align-items: center;
        font-size: 32px;
        font-weight: 400;
        .detail-tab {
            box-sizing: border-box;
            height: 100%;
            padding: 0 30px 32px;
            line-height: 64px;
            position: relative;
            &.active::before {
                content: "";
                width: 60px;
                height: 2px;
                border-radius: 1px;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateY(-50%);
            }
        }
    }
}
</style>