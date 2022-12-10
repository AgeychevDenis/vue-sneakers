<template>
  <div class="">
    <h2>Мои покупки</h2>
  </div>

  <div class="no-bookmarks">
    <img src="@/assets/img/smile-no-bookmarks.png" alt="no-bookmarks" />
    <h4>У вас нет заказов</h4>
    <p>
      Вы нищеброд? <br />
      Оформите хотя бы один заказ
    </p>
    <base-button to="/"></base-button>
  </div>
</template>

<script>
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