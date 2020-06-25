<template>
    <div class="image-list" @click.stop>
        <div class="image-wrapper" v-for="(img, index) in data" :key="index" @click="handlePreview(index)" :class="{single: data.length == 1}">
            <!-- <img :src="img.url" @load="handleLoad" @click="handlePreview(index)"> -->
            <van-image height="100%" width="100%" :src="img.url" fit="cover"/>
        </div>
        <van-image-preview v-model="showPreview" :images="urlArr" :start-position="startIndex"/>
    </div>
</template>
<script>
import FileMixin from './file_mixin';
export default {
    name: 'AImage',
    mixins: [FileMixin],
    computed: {
        imageCls() {
            const imgs = this.data.files && this.data.files.image;
            if (!imgs) return '';
            let imgCls = '';
            if (imgs.length == 1) imgCls = 'single-class';
            else if (imgs.length == 2) imgCls = 'double-class';
            return imgCls;
        }
    },
    data() {
        return {
            urlArr: [],
            startIndex: 0,
            showPreview: false
        }
    },
    methods: {
        handleLoad(e) {
            console.log(e);
        },
        handlePreview(index) {
            this.startIndex = index;
            this.showPreview = true;
        }
    },
    mounted() {
        const fileReader = new FileReader();
        this.urlArr = [];
        this.data.forEach(e => {
            this.urlArr.push(e.url);
            const image = new Image();
            
        })
        
    }
}
</script>
<style lang="less" scoped>
.image-list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 20px;
    .image-wrapper {
        overflow: hidden;
        flex-shrink: 0;
        width: 224px;
        height: 224px;
        padding-bottom: 15px;
        &.single {
            width: 100%;
        }
        &:not(:nth-child(3n + 1)) {
            padding-left: 15px;
        }
    }
}
</style>