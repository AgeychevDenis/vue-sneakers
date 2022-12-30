<template>
  <h2>Мои закладки</h2>
  <div class="products" v-if="favorite.length > 0">
    <app-list :items="favorite"></app-list>
  </div>
  <div v-else>
    <div class="no-bookmarks">
      <img src="@/assets/img/smile-no-bookmarks.png" alt="no-bookmarks" />
      <h4>Закладок нет :(</h4>
      <p>Вы ничего не добавляли в закладки</p>
    </div>

    <base-button to="/">Вернуться назад</base-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppList from "@/components/AppList.vue";

export default {
  computed: {
    ...mapState({
      favorite: (state) => state.sneakers.favorite,
    }),
  },
  components: {
    AppList,
  },
};
</script>

<style lang="scss" scoped>
.no-bookmarks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  img {
    margin-bottom: 25px;
  }

  h4 {
    font-size: 24px;
    line-height: 29px;
    margin: 0 0 10px;
  }

  p {
    margin: 0;
    opacity: 0.4;
  }
}
</style>