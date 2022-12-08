<template>
  <div className="card" v-for="item in items" :key="item.id">
    <img width="133" height="112" :src="item.imageUrl" alt="Sneakers" />
    <h5>{{ item.title }}</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{{ priceRu(item.price) }} руб.</b>
      </div>
      <button className="button">
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
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #f3f3f3;
  padding: 30px;
  width: 220px;
  border-radius: 40px;

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
</style>