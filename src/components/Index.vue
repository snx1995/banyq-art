<template>
    <div class="index">
        <van-tabs v-model="activeTab" class="header van">
            <van-tab title="主页" name="home"/>
            <van-tab title="后台" name="back"/>
        </van-tabs>
        <div class="body">
            <Card v-for="(item, index) in data" :key="index" :data="item"/>
        </div>
        <div class="footer">

        </div>
    </div>
</template>
<script>
    import Card from './home/Card'
    export default {
        name: 'index',
        components: {
            Card
        },
        data() {
            return {
                activeTab: "home",
                data: [
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        date: '21:33',
                        content: '第一条动态',
                        files: {
                            file: [
                                { name: '关关雎鸠，在河之洲，窈窕淑女，君子好逑.file', size:'1M' },
                                { name: '蒹葭苍苍，白露为霜。所谓伊人，在水一方.file', size:'2.1M' },
                                { name: '知我者，谓我心忧；不知我者，谓我何求，悠悠苍天，此何人哉?.file', size:'1.3M' }
                            ]
                        }
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        date: '21:33',
                        content: '竹杖芒鞋轻胜马',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        content: '你是澄清的秦淮河，游过一次便是一生',
                        date: '21:33',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        date: '21:33',
                        content: '竹杖芒鞋轻胜马',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        content: '你是澄清的秦淮河，游过一次便是一生',
                        date: '21:33',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        date: '21:33',
                        content: '竹杖芒鞋轻胜马',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        content: '你是澄清的秦淮河，游过一次便是一生',
                        date: '21:33',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        date: '21:33',
                        content: '竹杖芒鞋轻胜马',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        content: '你是澄清的秦淮河，游过一次便是一生',
                        date: '21:33',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        date: '21:33',
                        content: '竹杖芒鞋轻胜马',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        content: '你是澄清的秦淮河，游过一次便是一生',
                        date: '21:33',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        date: '21:33',
                        content: '竹杖芒鞋轻胜马',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        content: '你是澄清的秦淮河，游过一次便是一生',
                        date: '21:33',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        date: '21:33',
                        content: '竹杖芒鞋轻胜马',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        content: '你是澄清的秦淮河，游过一次便是一生',
                        date: '21:33',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        date: '21:33',
                        content: '竹杖芒鞋轻胜马',
                        files: {}
                    },
                    {
                        user: {
                            id: '1',
                            name: '意想之外',
                            avatar: '../../../static/imgs/avatar.jpg',
                            sign: '月亮坠入了秦淮河，星星垂眸惊动了舸'
                        },
                        content: '你是澄清的秦淮河，游过一次便是一生',
                        date: '21:33',
                        files: {}
                    }
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    .index {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .header, .footer {
            flex-shrink: 0;
            flex-grow: 0;
        }
        .content {
            flex-shrink: 1;
            flex-grow: 1;
        }
        .body {
            flex-grow: 1;
            overflow: auto;
        }
    }
</style>
