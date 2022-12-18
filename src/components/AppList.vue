<template>
  <div class="card" v-for="item in items" :key="item.id">
    <div class="favorite">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#cfcfcf"
            d="M12 7.5h.5c0-2.026 2.194-4 4.44-4 3.024 0 4.56 2.412 4.56 5.262C21.5 15.894 12 20.5 12 20.5S2.5 15.894 2.5 8.762C2.5 5.912 4.036 3.5 7.06 3.5c2.246 0 4.44 1.974 4.44 4h.5z"
          />
        </g>
      </svg>
    </div>
    <img width="133" height="112" :src="item.imageUrl" alt="Sneakers" />
    <h5>{{ item.title }}</h5>
    <div class="d-flex justify-between align-center">
      <div class="d-flex flex-column">
        <span>Цена:</span>
        <b>{{ priceRu(item.price) }} руб.</b>
      </div>
      <button class="button" @click="addToCart(item)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="#D3D3D3"
        >
          <path
            d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdded: false,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    priceRu(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    addToCart(item) {
      this.$store.dispatch("sneakers/addProductToCart", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #f3f3f3;
  padding: 30px;
  width: 220px;
  border-radius: 40px;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 20px 35px #0000000f;
    transform: translateY(-5px);
  }

  span {
    font-size: 13px;
    opacity: 0.5;
    text-transform: uppercase;
  }

  b {
    font-size: 14px;
  }

  h5 {
    font-weight: 400;
    font-size: 14px;
  }
}

.button {
  background-color: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 8px;
  padding-top: 3px;
  height: 32px;
  width: 32px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #3cc755;
    border: 1px solid #fff;

    svg {
      fill: #ffffff;
    }
  }
}

.favorite {
  position: absolute;
  cursor: pointer;

  & svg path {
    transition: all 0.3s;
  }

  &:hover svg path {
    stroke: #ff8585;
  }
}
</style>