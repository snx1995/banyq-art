<template>
    <div class="art-system-logs">
        {{logs}}
    </div>
</template>
<script>

const FETCH_DELAY = 5000;

export default {
    name: 'SystemLogs',
    data() {
        return {
            logs: '',
            timer: 0
        }
    },
    methods: {
        async getLogs() {
            this.logs = await this.$axios.get('/art/server/logs');
        }
    },
    created() {
        this.getLogs();
        this.timer = setInterval(this.getLogs, FETCH_DELAY);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
}
</script>
<style lang="less" scoped>
.art-system-logs {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    font-size: 12px;
    background: #fff;
}
</style>