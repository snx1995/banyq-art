<template>
    <div class="index-page">
        <div class="index-container" ref="container">
            <v-btn outlined x-large elevation="24" color="rgba(255, 255, 255, .8)">enter</v-btn>
        </div>

        <v-snackbar v-model="showSnackbar" timeout="0">
            Welcome!!

            <template v-slot:action="{attrs}">
                <v-btn v-bind="attrs" color="pink" text @click="showSnackbar = false">
                    close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
    import VanillaTilt from 'vanilla-tilt';
    export default {
        data() {
            return {
                showSnackbar: false
            }
        },
        mounted() {
            VanillaTilt.init(this.$refs.container, {
                reverse: false
            })
            setTimeout(() => this.showSnackbar = true, 500)
        }
    }
</script>

<style lang="less" scoped>
.index-page {
    width: 100%;
    height: 100%;
    .index-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(45deg, #1abc9c, #e67e22);
    }
}
</style>