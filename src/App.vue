<template>
  <div class="wrapper clear">
    <app-header @showCart="showCart" />
    <app-cart :show="this.show" />
    <div class="content p-40">
      <div class="d-flex align-center justify-between mb-20">
        <h1 class="mb-40">Все кроссовки</h1>
        <div class="search-block d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
              stroke="#E4E4E4"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <input v-model="valueQuery" placeholder="Поиск..." />
        </div>
      </div>
      <div class="products" v-if="!isLoading">
        <app-list :items="sortArr"></app-list>
      </div>
      <div class="products" v-else>
        <is-loader v-for="n in 8" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppList from "./components/AppList.vue";
import isLoader from "./components/isLoader.vue";
import AppCart from "./components/AppCart.vue";
// import AppSearch from "./components/AppSearch.vue";

import axios from "axios";

export default {
  data() {
    return {
      // sneakers: [],
      isLoading: false,
      show: false,
      valueQuery: "",
    };
  },
  methods: {
    async fetchSneakers() {
      try {
        this.isLoading = true;
        const res = await axios.get(
          "https://6391c7e9b750c8d178cd1a49.mockapi.io/items"
        );
        this.sneakers = res.data;
      } catch (e) {
        alert("Ошибка ", e);
      } finally {
        this.isLoading = false;
      }
    },
    // searchItem(value) {
    //   this.valueQuery = value;
    //   console.log(this.valueQuery);
    // },
    showCart(closeCart) {
      this.show = closeCart;
    },
  },
  computed: {
    sortArr() {
      return [...this.sneakers].filter((item) =>
        item.title.toLowerCase().includes(this.valueQuery)
      );
    },
    allSneakers() {
      return this.$store.getters.allSneakers;
    },
  },
  created() {
    this.fetchSneakers();
  },
  components: {
    AppHeader,
    AppList,
    isLoader,
    AppCart,
    // AppSearch,
  },
};
</script>

<style lang="scss">
@import "./assets/index.min.css";

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
  h1 {
    margin: 0;
  }
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

.search-block {
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  padding: 0 15px;
  position: relative;
  align-items: center;
}

.search-block input {
  border: 0;
  padding: 13px;
  font-size: 16px;
  width: 200px;
  outline: none;
}
</style>
