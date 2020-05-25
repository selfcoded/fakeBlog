<template>
  <div class="home text-center py-5">
    <div class="content-container bg-primary p-3 text-white">
      <h1 class="text-white">Welcome to Fakeblog!!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Accusamus voluptates at, similique ad ipsam architecto maiores iure
        quisquam facilis voluptatum quia corrupti totam non necessitatibus
        dicta pariatur! In, accusamus recusandae.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style>
.home {
  height: 100%;
  width: 100%;
}
.content-container {
  width: 35rem;
  margin: 0 auto;
  border: 0.2rem solid white;
  border-radius: 1rem;
}
@media screen and (max-width: 700px) {
  .content-container {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
