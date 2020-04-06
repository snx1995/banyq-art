<template>
    <div class="file-list">
        <div class="file" v-for="(file, index) in data" :key="index">
            <div class="file-icon">
                <Icon name="file-empty"/>
            </div>
            <div class="file-info">
                <div class="file-name">{{file.name}}</div>
                <div class="file-size">{{file.size}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import FileMixin from './file_mixin';
export default {
    name: 'AFile',
    mixins: [FileMixin],
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
.file-list {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding-top: 20px;
    .file {
        margin-top: 10px;
        box-sizing: border-box;
        width: 100%;
        height: 112px;
        display: flex;
        align-items: center;
        background-color: #F5F5F5;
        .file-icon {
            height: 60px;
            width: 80px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-shrink: 0;
            flex-grow: 0;
        }
        .file-info {
            flex-shrink: 1;
            flex-grow: 0;
            min-width: 0;
            .file-name {
                box-sizing: border-box;
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 28px;
                color: #111;
                width: 100%;
                padding-right: 20px;
            }
            .file-size {
                font-size: 24px;
                color: #888;
            }
        }
    }
}
</style>