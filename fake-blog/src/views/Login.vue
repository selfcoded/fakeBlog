<template>
  <div class="login">
    <div class="container">
      <el-card class="login-card">
        <div class="logo mt-2 bg-light-grey">
          <logo class="logo-item" />
        </div>
        <section class="mt-4">
          <el-form @submit.native.prevent="login" class="ruleForm">
            <el-form-item prop="username">
              <el-input v-model="model.username" placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="model.password" type="password" placeholder="Password"></el-input>
            </el-form-item>

            <el-form-item class="d-flex jc-start">
              <el-button type="primary" native-type="submit" class="mr-4 ml-2">Login</el-button>

              <router-link to="/register" class="ml-5">
                <el-button type="primary">register</el-button>
              </router-link>

              <div class="eror">{{model.error}}</div>
            </el-form-item>
          </el-form>
        </section>
      </el-card>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";
export default {
  components: {
    Logo
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("/login", this.model);
      localStorage.token = res.data.token;
      console.log(localStorage.token);

      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.logo {
  border-radius: 0.3rem;
  margin: 0 auto;
}
.logo-item {
  margin: 0 auto;
}
.login-card {
  border-radius: 0.2rem;
  width: 17.5rem;
  height: 18rem;
  margin: 10rem auto;
  background-color: #3f5c6d2c;
}
.el-input {
  width: 15rem;
}
.login {
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-image: url("../assets/imgs/img1.jpg");
  background-size: 100%;
}
</style>