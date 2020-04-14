<template>
    <div class="publish-wrapper" :class="{expand}">
        <div class="header">
            <span class="btn" @click="$emit('close')">取消</span>
            <span class="op-bar">
                <span class="btn expand-btn" @click="expand = !expand">
                    <VanIcon :name="expand ? 'shrink' : 'expand-o'"/>
                </span>
                <span class="btn primary">发布</span>
            </span>
        </div>
        <div class="input-wrapper">
            <div contenteditable="true" class="comment">

            </div>
        </div>
        <div class="image-upload-wrapper" :class="{show: showImages}">
            <div class="content">
                <VanUploader v-model="images" multiple max-count="9"/>
            </div>
        </div>
        <div class="footer">
            <span class="btn">
                <VanIcon name="add-o"/>
            </span>
            <span class="btn">
                <VanIcon name="add-o"/>
            </span>
            <span class="btn">
                <VanIcon name="video-o"/>
            </span>
            <span class="btn" @click="handleImageUpload">
                <VanIcon name="photo-o"/>
            </span>
            <span class="btn">
                <VanIcon name="add-o"/>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Publish',
    data() {
        return {
            expand: false,
            showImages: false,
            images: []
        }
    },
    methods: {
        handleImageUpload() {
            this.showImages = !this.showImages
        }
    }
}
</script>
<style lang="less" scoped>
.publish-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 15px;
    font-size: 30px;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    transition: min-height .3s;
    &.expand {
        min-height: 80vh;
    }
    .header {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 15px;
        .op-bar {
            display: flex;
            justify-items: center;
            .expand-btn {
                font-size: 50px;
                padding-right: 30px;
            }
        }
    }
    .input-wrapper {
        flex-grow: 1;
        min-height: 25vw;
        width: 100%;
        position: relative;
        .comment {
            outline: none;
            position: absolute;
            top: 0;left: 0;bottom: 0;right: 0;
            background-color: #ecf0f1;
            box-sizing: border-box;
            padding: 20px;
            border-radius: 0px;
        }

    }
    .image-upload-wrapper {
        overflow: hidden;
        height: 0;
        transition: height .3s;
        &.show {
            height: 15vh;
        }
        .content {
            height: 100%;
            overflow-x: scroll;
            overflow-y: hidden;
            display: flex;
            align-items: center;

        }
    }
    .footer {
        display: flex;
        padding-top: 15px;
        text-align: right;
        justify-content: flex-end;
        .btn {
            font-size: 1.2em;
        }
    }
}
</style>
<style lang="less">
.publish-wrapper {
    .image-upload-wrapper {
        .van-uploader__wrapper {
            flex-wrap: nowrap;
        }
    }
}
</style>