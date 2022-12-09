<template>
  <div
    class="overlay overlay"
    :class="{ overlayVisible: this.$store.state.show }"
  >
    <div class="drawer">
      <h2 class="d-flex justify-between mb-30">
        Корзина
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          class="icon-close"
          @click="closeCart"
        >
          <rect
            x="0.5"
            y="0.5"
            width="31"
            height="31"
            rx="7.5"
            fill="white"
            stroke="#DBDBDB"
          />
          <path
            d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
            fill="#B5B5B5"
          />
        </svg>
      </h2>

      <div
        class="cartEmpty d-flex align-center justify-center flex-column flex"
      >
        <img
          height="100"
          width="100"
          class="mb-20"
          src="../assets/img/empty-cart.png"
          alt="Empty"
        />
        <h2>Корзина пустая</h2>
        <p class="opacity-6">
          Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </p>
        <button class="greenButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
          >
            <path
              d="M1 7H14.7143"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.71436 1L14.7144 7L8.71436 13"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Вернуться назад
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    closeCart() {
      this.$store.state.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.1s ease-out, visibility 0.1s ease-out;
  overflow: hidden;
}

.overlayVisible {
  visibility: visible;
  opacity: 1;
}

.drawer {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
  width: 420px;
  height: 100%;
  right: 0;
  background: #ffffff;
  box-shadow: -10px 4px 24px #0000001a;
  padding: 30px;
  transform: translate(100%);
  transition: transform 0.3s ease-in-out;
}

.overlayVisible .drawer {
  transform: translate(0);
}

.greenButton {
  width: 100%;
  height: 55px;
  background: #9dd558;
  border-radius: 18px;
  border: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  & svg {
    margin-right: 10px;
    transform: rotate(180deg);
  }
}

.cartEmpty .greenButton {
  width: 245px;
  margin-top: 20px;
}

.greenButton:hover {
  background-color: #a9da6c;
}

.icon-close {
  cursor: pointer;

  & rect,
  & path {
    transition: stroke 0.3s, fill 0.3s;
  }

  &:hover rect {
    stroke: #ff8585;
  }
  &:hover path {
    fill: #ff8585;
  }
}
</style>