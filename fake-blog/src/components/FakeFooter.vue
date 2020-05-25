<template>
  <div class="footer bg-black">
    <logo class="footer-logo" />
    <div class="footer-container">
      <div class="footer-nav d-flex jc-around ai-center">
        <router-link to="/" class="nav-item">
          <i class="icofont-home"></i>
        </router-link>|
        <router-link to="/users" class="nav-item">
          <i class="icofont-users-alt-3"></i>
        </router-link>|
        <router-link to="/posts" class="nav-item">
          <i class="icofont-newspaper"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "HelloWorld",
  components: {
    Logo
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media screen and (max-width: 800px) {
  .footer {
    height: 5rem;
    position: sticky;
    bottom: 0;
  }
  .footer-nav {
    height: 5rem;
    font-size: 2rem;
    color: white;
  }
  .footer-logo {
    display: none;
  }
}
@media screen and (min-width: 801px) {
  .footer {
    width: 100%;
    height: 8rem;
    position: sticky;
    bottom: 0;
  }
  .footer-container {
    display: none;
  }
  .footer-logo{
    margin: 0 auto;
    padding-top: 2rem
  }
}
</style>
