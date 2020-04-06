<template>
    <div class="image-list">
        <div class="image-wrapper" v-for="(img, index) in data" :key="index" @click="handlePreview(index)">
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
    .image-wrapper {
        padding: 5px;
        overflow: hidden;
        flex-shrink: 0;
        width: 234px;
        height: 234px;
        box-sizing: border-box;
    }
}
</style>