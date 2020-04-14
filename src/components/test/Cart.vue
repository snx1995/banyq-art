<template>
    <table border="1">
        <tr>
            <th>序号</th>
            <th>名称</th>
            <th>详情</th>
            <th>图片</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
            <td>{{index}}</td>
            <td>{{item.name}}</td>
            <td>{{item.detail}}</td>
            <td>
                <img :src="item.img" alt="" width="100px" height="100px">
            </td>
            <td>{{item.price}}</td>
            <td>
                <button @click="item.count ++">+</button>
                <input type="text" v-model="item.count">
                <button @click="item.count --">-</button>
            </td>
            <td><button @click="remove(item)">移除</button></td>
        </tr>
        <tr>
            <td colspan="5">总计</td>
            <td>{{total}}</td>
        </tr>
    </table>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        list() {
            return this.$store.state.cart || [];
        },
        total() {
            let sum = 0;
            for (let i = 0;i < this.list.length;i ++) {
                sum += this.list[i].price * this.list[i].count;
            }
            return sum;
        }
    },
    methods: {
        remove(item) {
            this.$store.commit('removeFromCart', item)
        }
    }
}
</script>
<style lang="less" scoped>
table {
    border-collapse: collapse;
    td {
        padding: 10px;
    }
}
</style>