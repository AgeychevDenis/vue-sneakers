<template>
  <div className="wrapper clear">
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width="40" height="40" src="./assets/img/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width="18" height="18" src="./assets/img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width="18" height="18" src="./assets/img/user.svg" />
        </li>
      </ul>
    </header>
    <div className="content p-40">
      <h1 className="mb-40">Все кроссовки</h1>
      <div className="d-flex">
        <div className="card">
          <img
            width="133"
            height="112"
            src="./assets/img/sneakers/1.jpg"
            alt="Sneakers"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img
                width="11"
                height="11"
                src="./assets/img/plus.svg"
                alt="Plus"
              />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width="133"
            height="112"
            src="./assets/img/sneakers/2.jpg"
            alt="Sneakers"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img
                width="11"
                height="11"
                src="./assets/img/plus.svg"
                alt="Plus"
              />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width="133"
            height="112"
            src="./assets/img/sneakers/3.jpg"
            alt="Sneakers"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img
                width="11"
                height="11"
                src="./assets/img/plus.svg"
                alt="Plus"
              />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width="133"
            height="112"
            src="./assets/img/sneakers/4.jpg"
            alt="Sneakers"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img
                width="11"
                height="11"
                src="./assets/img/plus.svg"
                alt="Plus"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

.card {
  border: 1px solid #f3f3f3;
  padding: 30px;
  width: 220px;
  border-radius: 40px;
  margin-right: 30px;

  span {
    font-size: 13px;
    opacity: 0.5;
    text-transform: uppercase;
  }

  b {
    font-size: 14px;
  }

  h5 {
    font-weight: 400;
    font-size: 14px;
  }
}

.button {
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 8px;
  height: 32px;
  width: 32px;
  cursor: pointer;
}
</style>
