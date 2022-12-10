<template>
  <div class="d-flex align-center justify-between mb-20">
    <h1 class="mb-40">Все кроссовки</h1>
    <search-item />
  </div>
  <p>{{ $store._actions }}</p>
  <div class="products" v-if="!isLoading">
    <app-list :items="sortArr"></app-list>
  </div>
  <div class="products" v-else>
    <is-loader v-for="n in 8" :key="n" />
  </div>
</template>

<script>
import AppList from "@/components/AppList.vue";
import searchItem from "@/components/SearchItem.vue";
import isLoader from "@/components/isLoader.vue";
import { mapState, mapGetters, mapActions } from "vuex";

// import axios from "axios";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchSneakers: "sneakers/fetchSneakers",
    }),

    // async fetchSneakers() {
    //   try {
    //     this.isLoading = true;
    //     const res = await axios.get(
    //       "https://6391c7e9b750c8d178cd1a49.mockapi.io/items"
    //     );
    //     this.sneakers = res.data;
    //   } catch (e) {
    //     alert("Ошибка ", e);
    //   } finally {
    //     this.isLoading = false;
    //   }
    // },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.sneakers.isLoading,
      sneakers: (state) => state.sneakers.sneakers,
      valueQuery: (state) => state.sneakers.valueQuery,
    }),
    ...mapGetters({
      sortArr: "modules/sneakers/sortArr",
    }),
    fetchSneakers() {
      return this.$store.actions.fetchSneakers;
    },
  },
  created() {},
  components: {
    AppList,
    searchItem,
    isLoader,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/index.min.css";

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}
</style>
