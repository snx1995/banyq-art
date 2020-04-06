<template>
    <div class="user-header">
        <Avatar :userId="user.id" :url="user.avatar" />
        <div class="info-bar">
            <div class="name">{{user.name}}</div>
            <div class="info">
                <span class="date">{{date}}</span>
                <span class="sign">{{user.sign}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import Avatar from './Avatar'
export default {
    name: 'UserHeader',
    components: {
        Avatar
    },
    props: {
        user: {
            type: Object,
            default() {
                return {}
            }
        },
        date: [String, Number]
    },
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
    .user-header {
        width: 100%;
        height: 128px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        box-sizing: border-box;
        .info-bar {
            flex-shrink: 1;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            .name {
                color: #ee0a24;
                text-align: left;
                font-size: 30px;
                font-weight: bold;
                padding-bottom: 10px;
            }
            .info {
                text-align: left;
                color: #888;
                font-size: 24px;
            }
        }
    }
</style>