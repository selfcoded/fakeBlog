<template>
  <div class="edit text-center p-5">
    <h1>Edit user</h1>

    <el-input class="mb-2" placeholder="name" v-model="newData.name"></el-input>
    <el-input class="mb-2" placeholder="email" v-model="newData.email"></el-input>
    <el-input class="mb-2" placeholder="city" v-model="newData.address.city"></el-input>
    <el-input class="mb-2" placeholder="street" v-model="newData.address.street"></el-input>
    <el-input class="mb-2" placeholder="suite" v-model="newData.address.suite"></el-input>
    <el-input class="mb-2" placeholder="phone" v-model="newData.phone"></el-input>
    <el-input class="mb-2" placeholder="website" v-model="newData.website"></el-input>
    <div class="text-right d-flex jc-around pb-2">
      <el-button type="danger" size="small" @click="$router.push(`/users`)">Cancel</el-button>
      <el-button type="primary" size="small" @click="update()">Submit</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      newData: {
        address: []
      }
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(
        `https://jsonplaceholder.typicode.com/users/${this.id}`
      );
      this.newData = res.data;
    },
    async update() {
      await fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: this.newData.name,
          email: this.newData.email,
          address: {
            street: this.newData.street,
            suite: this.newData.suite,
            city: this.newData.city
          },
          phone: this.newData.phone,
          website: this.newData.website
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      this.$router.push("/users");
      this.$message({
        type: "success",
        message: "saved"
      });
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style>
.edit {
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