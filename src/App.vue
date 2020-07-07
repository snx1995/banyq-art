<template>
    <div id="app">
        <transition name="router-slide">
            <router-view />
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'App'
    }
</script>
<style lang="less">
    * {
        padding: 0;
        margin: 0;
    }
    body, html {
        width: 100vw;
        height: 100vh;
        position: relative;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        background-color: #ecf0f1;
        display: flex;
        position: relative;
        > * {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    .router-fade-enter, .router-fade-leave-to {
        opacity: 0;
    }
    .router-fade-enter-active, .router-fade-leave-active {
        @dur: .5s;
        transition: opacity @dur;
    }
    .router-slide-enter {
        transform: translateX(-100%);
    }
    .router-slide-leave-to {
        transform: translateX(100%);
    }
    .router-slide-enter-active, .router-slide-leave-active {
        @dur: .5s;
        transition: transform @dur;
        transform: translateX(0);
    }
</style>
