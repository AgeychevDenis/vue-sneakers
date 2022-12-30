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

      <div class="d-flex flex-column h-100" v-if="cart.length > 0">
        <div class="items flex">
          <div class="cartItem mb-20" v-for="item in cart" :key="item.id">
            <img :src="item.imageUrl" class="cartItemImg" />
            <div>
              <p class="cartItemTitle mt-5 mb-5">
                {{ textCrop(item.title) }}
              </p>
              <b>{{ priceRu(item.price) }} руб.</b>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              class="icon-close"
              @click="removeToCart(item)"
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
          </div>
        </div>

        <div class="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{{ $store.state.sneakers.totalPrice }} руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>{{ $store.state.sneakers.taxPrice }} руб.</b>
            </li>
          </ul>
          <base-button to="" class="greenButton" @click="addToTotalOrder">
            Оформить заказ
          </base-button>
        </div>
      </div>

      <div
        class="cartEmpty d-flex align-center justify-center flex-column flex"
        v-else
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
        <base-button to="" @click="closeCart">Вернуться назад</base-button>
      </div>

      <div
        class="
          cartEmpty
          d-flex
          align-center
          justify-center
          flex-column flex
          off
        "
      >
        <img
          height="100"
          width="100"
          class="mb-20"
          src="../assets/img/successful-order.png"
          alt="Empty"
        />
        <h2>Заказ оформлен!</h2>
        <p class="opacity-6 text-center">
          Ваш заказ #18 скоро будет передан курьерской доставке
        </p>
        <base-button to="" @click="closeCart">Вернуться назад</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    closeCart() {
      this.$store.state.show = false;
    },
    priceRu(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    textCrop(text) {
      return `${text.substring(0, 25)}...`;
    },
    removeToCart(item) {
      this.$store.dispatch("sneakers/removeProductToCart", item);
    },
    addToTotalOrder() {
      this.$store.dispatch("sneakers/addProductToOrder");
    },
  },
  computed: {
    ...mapState({
      cart: (state) => state.sneakers.cart,
    }),
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
  width: 460px;
  height: 100%;
  right: 0;
  background: #ffffff;
  box-shadow: -10px 4px 24px #0000001a;
  padding: 30px;
  transform: translate(100%);
  transition: transform 0.3s ease-in-out;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

.overlayVisible .drawer {
  transform: translate(0);
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

.greenButton {
  margin: 20px auto 0;
}

.cartItem {
  display: grid;
  grid-template-columns: 110px auto 25px;
  border: 1px solid #f3f3f3;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
}

.cartItemImg {
  width: 100px;
  height: 80px;
  object-fit: cover;
}

.h-100 {
  height: 100%;
}

.cartTotalBlock ul li {
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}

.cartTotalBlock ul li div {
  flex: 1;
  height: 1px;
  border-bottom: 1px dashed #dfdfdf;
  position: relative;
  top: -4px;
  margin: 0 7px;
}

.off {
  display: none;
  &.on {
    display: flex;
  }
}
</style>