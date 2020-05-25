<template>
  <div class="d-flex jc-between bg-black p-3">
    <logo/>
    <right-nav/>
  </div>
</template>

<script>
import Logo from './Logo'
import RightNav from './RightNav'
export default {
  name: 'HelloWorld',
  components:{
    Logo,
    RightNav
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar{
  width: 100%;
  height: 108px;
  line-height: 108px;

}
</style>
