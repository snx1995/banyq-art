<template>
    <div class="avatar-wrapper" @click.stop>
        <img :src="url" class="avatar">
    </div>
</template>
<script>
export default {
    name: 'Avatar',
    props: {
        userId: String,
        url: String
    }
}
</script>
<style lang="less" scoped>
.avatar-wrapper {
    width: 72px;
    height: 72px;
    flex-shrink: 0;
    flex-grow: 0;
    .avatar {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
}
</style>