<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App'
    }

</script>
<style>
    * {
        padding: 0;
        margin: 0;
    }

    body, html {
        width: 100vw;
        height: 100vh;
        position: relative;
        background-color: #ecf0f1;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>
