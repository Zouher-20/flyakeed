<template>
  <footer class="pt-4 pb-1 container bg-white text-primary-dark">
    <div class="d-flex justify-content-between p-5">
      <ul class="footer-menu">
        <li
          style="
            position: relative;
            width: 4.8em;
            height: 1em;
            font-size: 1.7em;
          "
        >
          <img src="../assets/logo.png" alt="" />
        </li>
        <li class="py-2"><img src="../assets/paymentMethods.png" alt="" /></li>
      </ul>

      <ul class="footer-menu">
        <div>فلاي أكيد</div>
        <li><a href="">من نحن</a></li>
        <li><a href="">فلاي أكيد أعمال</a></li>
      </ul>
      <ul class="footer-menu">
        <div>الدعم</div>
        <li><a href="">تواصل معنا</a></li>
        <li><a href="">الأسئلة الشائعة</a></li>
      </ul>
      <ul class="footer-menu">
        <div>الأمور القانونية</div>
        <li><a href="">الشروط والأحكام</a></li>
        <li><a href="">شروط الخصوصية</a></li>
      </ul>
      <ul class="footer-menu">
        <div>روابط التحميل</div>
        <li
          class="my-3"
          style="
            position: relative;
            width: 4.8em;
            height: 1em;
            font-size: 1.7em;
          "
        >
          <img src="../assets/google_play.png" alt="" />
        </li>
        <li></li>
        <li
          style="
            position: relative;
            width: 4.8em;
            height: 1em;
            font-size: 1.7em;
          "
        >
          <img src="../assets/apple_store.png" alt="" />
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-3 text-start mx-5 d-flex ">
        <p class="px-3"> اتصل بنا </p>
        <p>920000091</p>
      </div>
      <div class="col-4">
        <p>جميع الحقوق محفوظة لموقع وتطبيق فلاي أكيد © 2023.</p>
      </div>
      <div class="col-4">
        <ul class="d-flex">
          <li class="d-flex">
            <span class="mx-4"
              ><img
                style="width: 25px"
                src="../assets/instagram-svgrepo-com.svg"
                alt=""
              /> </span
            ><span class="mx-5"
              ><img
                style="width: 25px"
                src="../assets/facebook-boxed-svgrepo-com.svg"
                alt="" /></span
            ><span
              ><img
                style="width: 25px"
                src="../assets/twitter-svgrepo-com.svg"
                alt="" /></span
            ><span class="mx-5">
              <img
                style="width: 25px"
                src="../assets/linkedin-linked-in-svgrepo-com.svg"
                alt=""
              />
            </span>
          </li>

          <li></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  /* background-color: #333; */
  padding: 20px 0;
  text-align: center;
}

.footer-menu {
  list-style: none;
  padding: 0;
  display: inline;
  justify-content: center;
}

.footer-menu li {
  margin: 10px 10px;
}

.footer-menu li a {
  text-decoration: none;
  font-size: 0.85em;
  color: #1a1f71;
}
</style>
