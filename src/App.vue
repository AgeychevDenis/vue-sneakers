<template>
  <div className="wrapper clear">
    <app-header />
    <div className="content p-40">
      <h1 className="mb-40">Все кроссовки</h1>
      <div className="products" v-if="!isLoading">
        <app-list :items="sneakers"></app-list>
      </div>
      <div v-else>Загрузка...</div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppList from "./components/AppList.vue";
import axios from "axios";

export default {
  data() {
    return {
      sneakers: [],
      isLoading: false,
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
  },
  created() {
    this.fetchSneakers();
  },
  components: {
    AppHeader,
    AppList,
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
</style>
