<template>
  <div class="d-flex align-center justify-between mb-20">
    <h1 class="mb-40">Все кроссовки</h1>
    <search-item />
  </div>
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

export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    ...mapActions({
      fetchSneakers: "sneakers/fetchSneakers",
    }),
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.sneakers.isLoading,
      data: (state) => state.sneakers.data,
      valueQuery: (state) => state.sneakers.valueQuery,
    }),
    ...mapGetters({
      sortArr: "sneakers/sortArr",
    }),
  },
  mounted() {
    this.fetchSneakers();
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
