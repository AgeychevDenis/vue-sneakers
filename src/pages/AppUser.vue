<template>
  <h2>Мои покупки</h2>
  <div class="products" v-if="totalOrder.length > 0">
    <app-list :items="totalOrder"></app-list>
  </div>

  <div class="no-bookmarks" v-else>
    <img src="@/assets/img/no-orders.png" alt="no-bookmarks" />
    <h4>У вас нет заказов</h4>
    <p>
      Вы нищеброд? <br />
      Оформите хотя бы один заказ
    </p>
    <base-button to="/">Вернуться назад</base-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppList from "@/components/AppList.vue";

export default {
  computed: {
    ...mapState({
      totalOrder: (state) => state.sneakers.totalOrder,
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
    text-align: center;
    margin: 0;
    opacity: 0.4;
  }
}
</style>