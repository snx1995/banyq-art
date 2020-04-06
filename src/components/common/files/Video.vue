<template>
    <div class="video-wrapper">
        <video :src="data.url" controls>您的浏览器不支持视频播放</video>
    </div>
</template>
<script>
import FileMixin from './file_mixin';
export default {
    name: 'AVideo',
    mixins: [FileMixin]
}
</script>
<style lang="less" scoped>
.video-wrapper {
    width: 100%;
    video {
        width: 100%;
    }    
}
</style>