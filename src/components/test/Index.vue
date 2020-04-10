<template>
    <div class="test">
        <table border="1">
            <tr>
                <th>序号</th>
                <th>名称</th>
                <th>详情</th>
                <th>图片</th>
                <th>价格</th>
                <th>购物车</th>
            </tr>
            <tr v-for="(item, index) in list" :key="index">
                <td>{{index}}</td>
                <td>{{item.name}}</td>
                <td>{{item.detail}}</td>
                <td>
                    <img :src="item.img" alt="" width="100px" height="100px">
                </td>
                <td>{{item.price}}</td>
                <td><button @click="addToCart(item)" :disabled="item.inCart">加入</button></td>
            </tr>
        </table>
        <button @click="handleCommit">结算</button>
    </div>
</template>
<script>
export default {
    name: 'Test',
    data() {
        return {
            list: [],
            page: 1,
            size: 10
        }
    },
    methods: {
        handleBatchSelect(event) {
            console.log($event);
        },
        handleSelect(event, item) {
            console.log(event, item);
        },
        addToCart(item) {
            item.inCart = true
            this.$store.commit('addToCart', item);
        },
        handleCommit() {
            this.$router.push('cart')
        }
    },
    mounted() {
        this.$store.commit('clearCart');
        this.$net.get('/data/getList', {
            params: {
                page: this.page,
                size: this.size
            }
        }).then(res => {
            if (res.code == 0 && res.data && res.data.data) {
                const list = res.data.data;
                list.forEach(e => {
                    e.inCart = false;
                })
                this.list = list;
            }
        })
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
button:disabled {
    filter: brightness(.5);
    cursor: not-allowed;
}
</style>