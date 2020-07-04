<template>
    <div class="test">
        <button @click="handleComment">Comment</button>
    </div>
</template>
<script>
import Publish from '../home/Publish';
export default {
    name: "Test",
    components: {
        Publish
    },
    data() {
        return {
            showPublish: false
        }
    },
    methods: {
        handleComment() {
            AkiuBridge.comment()
        }
    }
}
</script>
<style lang="less" scoped>

</style>