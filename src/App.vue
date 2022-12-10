<template>
  <div class="wrapper clear">
    <app-header />
    <app-cart />
    <div class="content p-40">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppCart from "@/components/AppCart.vue";

export default {
  components: {
    AppHeader,
    AppCart,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: "Inter", system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e7f6ff;
}

.wrapper {
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  max-width: 1080px;
  margin: 50px auto;
}

header {
  border-bottom: 1px solid #eaeaea;
  img {
    margin-right: 15px;
  }

  h3,
  p {
    margin: 0;
  }
}

.content {
  min-height: 70vh;
  h1 {
    margin: 0;
  }
}
</style>