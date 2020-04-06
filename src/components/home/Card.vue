<template>
    <div class="card">
        <UserHeader :user="data.user" :date="data.date"/>
        <div class="content">
            {{data.content}}
        </div>
        <AAudio v-if="data.files && data.files.audio && data.files.audio.length" :data="data.files.audio"/>
        <AImage v-if="data.files && data.files.image && data.files.image.length" :data="data.files.image"/>
        <AVideo v-if="data.files && data.files.video" :data="data.files.video"/>
        <AFile v-if="data.files && data.files.file && data.files.file.length" :data="data.files.file"/>
    </div>
</template>
<script>
import UserHeader from '../common/UserHeader';
export default {
    name: "",
    components: {
        UserHeader
    },
    props: {
        data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        goDetail() {

        }
    }
}
</script>
<style lang="less" scoped>
.card {
    width: 100%;
    background-color: #fff;
    margin-bottom: 15px;
    padding: 24px;
    box-sizing: border-box;
    .content {
        .text {
            color: #111;
            font-size: 30px;
        }
    }
}
</style>