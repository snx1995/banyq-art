<template>
    <div class="index">
        <div class="header">

        </div>
        <div class="body">
            <VanPullRefresh v-model="loading" @refresh="onRefresh" success-text="加载成功">
                <Card v-for="(item, index) in data" :key="index" :data="item"/>
            </VanPullRefresh>
        </div>
        <div class="footer">

        </div>
        <VanPopup 
            position="bottom" 
            :close-on-click-overlay="false" 
            v-model="showPublish">
            <Publish @close="showPublish = false"></Publish>
        </VanPopup>
    </div>
</template>
<script>
    import Publish from './home/Publish'; 
    import Card from './home/Card'
    export default {
        name: 'index',
        components: {
            Card,
            Publish
        },
        data() {
            return {
                activeTab: "home",
                showPublish: false,
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
                            ],
                            image: [
                                { url: 'http://res.banyq.art/0_compressed.JPG' },
                                // { url: 'http://res.banyq.art/1_compressed.JPG' },
                                // { url: 'http://res.banyq.art/2_compressed.JPG' },
                                // { url: 'http://res.banyq.art/3_compressed.JPG' },
                                // { url: 'http://res.banyq.art/4_compressed.JPG' },
                                // { url: 'http://res.banyq.art/5_compressed.JPG' },
                                // { url: 'http://res.banyq.art/6_compressed.JPG' },
                                // { url: 'http://res.banyq.art/7_compressed.JPG' },
                                // { url: 'http://res.banyq.art/8_compressed.JPG' }
                            ],
                            video: {
                                url: '../../static/video/example.mp4'
                            }
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
                ],
                loading: false
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.loading = false;
                }, 2000)
            }
        },
        mounted() {
            window.togglePublish = () => {
                this.showPublish = !this.showPublish;
                return this.showPublish ? 'showPublish' : 'hidePublish';
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
            padding-bottom: 5vh;
        }
    }
</style>
