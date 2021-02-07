<template>
  <div id="nav" v-show="!(path ==='/')">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <font-awesome-icon icon="user-secret" />
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
    export default {
        data(){
            return{
                path:''
            }
        },
        // 判断路由
        mounted() {
          this.path = this.$route.path;
        },
        watch:{
            $route(to){
                this.path = to.path
            }
        }
    }
</script>
