<template>
  <div id="app">
    <component :is="layout"> </component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      default_layout: "console", //设置layout
      isRouterAlive: true
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || this.default_layout) + "_layout";
    }
  }
};
</script>
