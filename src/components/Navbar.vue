<!-- Header.vue -->
<template>
  <header class="bg-primary-dark header-continer">
    <div class="img-continer">
      <img class="flag-img" src="../assets/Logo-Dark.png" alt="" />
    </div>
    <div class="d-flex dropdown-flag" >
      <span class="px-2 py-2" >
        <svg
          style="width: 1.2em"
         
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 513 342"
        >
          <path fill="#FFF" d="M0 0h513v342H0z"></path>
          <path
            d="M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z"
            fill="#D80027"
          ></path>
          <path fill="#2E52B2" d="M0 0h256.5v184.1H0z"></path>
          <path
            d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z"
            fill="#FFF"
          ></path>
        </svg>
      </span>
      <span           style="font-size: 1em"
 class="text-white ">english</span>
    </div>
    <span           style="font-size: 1em"
 class="text-white flag-lang">العربية</span>
    <div>
        
      <button type="button" class="custom-btn btn-12 mx-2">
        <span>ابحث</span><span>الشركات</span>
      </button>
      <button class="custom-btn btn-12 btn-12-12">
        <span>اذهب</span><span>تسجيل الدخول</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  // You can add component properties, methods, etc. here
};
</script>

<style scoped>
/* Add your styles for the header here */

.btn-12 {
  position: relative;
  right: 20px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}
.dropdown-flag {
    left: 22%;
    position: absolute;}
.flag-lang {
    left: 34%;
    position: absolute;
        padding-bottom: 5px;
}
.btn-12 span {
  color: white;
  background: var(--bg-primary-dark);
  background: linear-gradient(0deg, #196dfb 0%, #196dfb 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.btn-12.btn-12-12 span {
  color: #196dfb !important;
  background: var(--bg-primary-dark);
  background: linear-gradient(0deg, #ffffff 0%, #ffffff 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.btn-12 span:nth-child(1) {
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
.btn {
  font-family: fangsong;
  border-radius: 0px !important;
  border: 0;
  outline: 0;
  font-size: 1em;
  font-weight: 300;
  min-width: 120px;
  padding: 0.5em 1em;
  cursor: pointer;
  /* background-color: var(--primary-color);
    color: var(--white-color); */
  transition: 0.1s;
}
.header-continer {
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 15% 1.5em 10%;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.img-continer {
  font-size: 2em;
  width: 4.8em;
  height: 1em;
}
.flag-img {
  height: 100%;
  width: 100%;

  object-fit: cover;
  color: transparent;
}
</style>
