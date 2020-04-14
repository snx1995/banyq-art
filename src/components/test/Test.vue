<template>
    <div class="test">
        <button @click="showPublish = true">publish</button>
        <VanPopup 
            position="bottom" 
            :close-on-click-overlay="false" 
            v-model="showPublish">
            <Publish @close="showPublish = false"></Publish>
        </VanPopup>
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

    }
}
</script>
<style lang="less" scoped>

</style>