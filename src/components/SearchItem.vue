<template>
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
    <input
      v-model="valueQuery"
      @update:model-value="setValueQuery"
      placeholder="Поиск..."
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      setValueQuery: "sneakers/setValueQuery",
    }),
  },
  computed: {
    ...mapState({
      valueQuery: (state) => state.sneakers.valueQuery,
    }),
  },
};
</script>

<style lang="scss" scoped>
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