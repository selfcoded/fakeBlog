<template>
  <div>
    <div class="bg-black">
      <fake-header class="f-header" />
    </div>
    <div class="router bg-light-grey">
      <router-view class="router-view" />
    </div>
    <div class="bg-black">
      <fake-footer class="f-footer" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FakeHeader from "@/components/FakeHeader.vue";
import FakeFooter from "@/components/FakeFooter.vue";

export default {
  name: "Home",
  components: {
    FakeHeader,
    FakeFooter
  }
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
}
.router {
  height: 100%;
}
.router-view,
.f-header,
.f-footer {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
