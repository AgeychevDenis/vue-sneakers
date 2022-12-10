<template>
  <h2>Мои закладки</h2>
  <div class="no-bookmarks">
    <img src="@/assets/img/smile-no-bookmarks.png" alt="no-bookmarks" />
    <h4>Закладок нет :(</h4>
    <p>Вы ничего не добавляли в закладки</p>
  </div>
  <base-button to="/"></base-button>
</template>

<script>
export default {};
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