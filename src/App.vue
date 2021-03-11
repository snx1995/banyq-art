<template>
    <v-app>
        <router-view></router-view>
    </v-app>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
<style lang="less">
html, body {
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #00b3ee;
}
#app {
    background-color: transparent;
}
</style>