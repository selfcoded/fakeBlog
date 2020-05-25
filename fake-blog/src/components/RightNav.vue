<template>
  <div class="d-flex ai-center">
    <div class="nav1">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/users" class="nav-item">Users</router-link>
      <router-link to="/posts" class="nav-item">Posts</router-link>
      <template v-if="username">
        <span class="btn-login bg-primary p-2">{{username}}</span>
        <button class="btn-login bg-primary p-2" @click="logout()">Log out</button>
      </template>
      <template v-else>
        <button class="btn-login bg-primary p-2" @click="login()">LOGIN</button>
      </template>
    </div>
    <div class="nav2">
      <template v-if="username">
        <span class="btn-login bg-primary p-2">{{username}}</span>
        <button class="btn-login bg-primary p-2" @click="logout()">Log out</button>
      </template>
      <template v-else>
        <button class="btn-login bg-primary p-2" @click="login()">LOGIN</button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      username: ""
    };
  },
  methods: {
    async getUser() {
      const res = await this.$http.get("/user");
      this.username = res.data.username;
    },
    async logout() {
      window.localStorage.clear();
      this.reload();
    },
    async login() {
      await this.$router.push("/login");
    }
  },
  created() {
    this.getUser();
  }
};
</script>

<style>
.nav1 {
  float: right;
  width: 26rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav2 {
  float: right;
  display: flex;
  width: 10rem;
  justify-content: space-around;
  align-items: center;
}

@media screen and (max-width: 800px) {
  .nav1 {
    display: none;
  }
  @media screen and (max-width: 350px) {
    .btn-login {
      font-size: 0.8rem;
    }
    .nav2 {
      width: 130px;
    }
  }
}
@media screen and (min-width: 801px) {
  .nav2 {
    display: none;
  }
}

.nav-item {
  color: white;
  font-weight: bold;
}
.btn-login {
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  box-shadow: 0 0.2rem 0.2rem black;
}
.router-link-exact-active {
  color: #007bff;
}
</style>