<template>
    <div class="test">
        <button v-anti-shake="event => {handler(event, i)}" v-for="i in 5" :key="i">{{i}}</button>
    </div>
</template>
<script>
export default {
    name: 'Test',
    data() {
        return {

        }
    },
    methods: {
        handler(event, id) {
            console.log(event, `btn ${id}`)
            return 1
        }
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
button {
    padding: 10px 20px;
    &:not(:last-child) {
        margin-right: 10px;
    }
}
</style>