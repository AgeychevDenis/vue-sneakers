<template>
  <header className="d-flex justify-between align-center p-40">
    <div className="d-flex align-center">
      <img width="40" height="40" src="../assets/img/logo.png" />
      <div>
        <h3 className="text-uppercase">Vue Sneakers</h3>
        <p className="opacity-5">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul className="d-flex">
      <li className="mr-30">
        <img
          width="18"
          height="18"
          @click="showCart"
          src="../assets/img/cart.svg"
        />
        <span>1205 руб.</span>
      </li>

      <li>
        <img width="18" height="18" src="../assets/img/user.svg" />
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showCart() {
      this.$store.state.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>