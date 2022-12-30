<template>
  <router-link class="greenButton">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 14"
      fill="none"
    >
      <path
        d="M1 7H14.7143"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M8.71436 1L14.7144 7L8.71436 13"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "base-button",
};
</script>

<style lang="scss" scoped>
.greenButton {
  width: 245px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9dd558;
  border-radius: 18px;
  border: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  margin: 40px auto 0;
  & svg {
    margin-top: 3px;
    margin-right: 10px;
    transform: rotate(180deg);
  }
}

.greenButton:hover {
  background-color: #a9da6c;
}
</style>