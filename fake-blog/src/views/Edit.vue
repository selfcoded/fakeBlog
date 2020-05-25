<template>
  <div class="edit text-center p-5">
    <h1 >Edit Post</h1>
    <el-form @submit.native.prevent="update" label-width="120px">
      <el-form-item label="userId">
        <el-input v-model="model.userId"></el-input>
      </el-form-item>
      <el-form-item label="title">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="content">
        <el-input type="textarea" v-model="model.body"></el-input>
      </el-form-item>
      <el-form-item class="text-center">
        <el-button type="primary" native-type="submit">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(
        `https://jsonplaceholder.typicode.com/posts/${this.id}`
      );
      this.model = res.data;
      console.log(res.data);
    },
    async update() {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: this.model.title,
          body: this.model.textarea,
          userId: this.model.userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      this.$router.push("/posts");
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