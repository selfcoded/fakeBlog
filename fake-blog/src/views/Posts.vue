<template>
  <div class="p-2">
    <div class="content-header mb-3" v-if="username">
      <div class="py-2 mb-3 d-flex ai-center jc-center">
        <span class="pr-3">ADD YOUR ACCOUNT</span>
        <el-button type="primary" size="small" @click="show=true">+</el-button>
      </div>

      <div v-show="show">
        <el-form @submit.native.prevent="save" class="px-2">
          <el-form-item>
            <div class="d-flex">
              <el-input v-model="model.userId" class="mr-3" placeholder="user ID from 1"></el-input>
              <el-input v-model="model.title" class="ml-3" placeholder="title"></el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <el-input
              type="textarea"
              v-model="model.textarea"
              class="mb-2"
              placeholder="Type something"
            ></el-input>
          </el-form-item>
          <el-form-item class="text-right">
            <el-button type="danger" @click="show=false">Cancel</el-button>
            <el-button type="primary" native-type="submit" @click="show=false">Submit</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="row no-gutters">
      <div
        class="col-sm-12 col-md-4 col-12 col-lg-3 col-xl-3"
        v-for="index in pageSize"
        :key="index"
      >
        <div class="card border-primary mb-3">
          <h5
            class="card-title bg-primary p-3 text-white"
            v-if="reverseItems[(pageNum-1) * pageSize + (index-1)]"
          >{{ reverseItems[(pageNum-1) * pageSize + (index-1)].title }}</h5>
          <p
            class="card-text p-3"
            v-if="reverseItems[(pageNum-1) * pageSize + (index-1)]"
          >{{ reverseItems[(pageNum-1) * pageSize + (index-1)].body }}</p>
          <div class="d-flex jc-around bottom-btn" v-if="username">
            <el-button
              type="primary"
              size="small"
              icon="el-icon-edit"
              @click="$router.push(`/edit/${reverseItems[(pageNum-1) * pageSize + (index-1)].id}`)"
            ></el-button>
            <el-button
              type="danger"
              size="small"
              icon="el-icon-delete"
              @click="remove(reverseItems.id)"
            ></el-button>
          </div>
        </div>
      </div>
    </div>
    <el-pagination
      class="text-right mt-4"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-size="pageSize"
      layout=" prev, pager, next, jumper"
      :total="items.length"
    ></el-pagination>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      //items: [],
      show: false,
      model: {},
      userId: "",
      title: "",
      body: "",
      username: "",
      pageNum: 1,
      pageSize: 12
    };
  },
  name: "Home",
  // filters: {
  //   pagination(items, pageNum, pageSize) {
  //     //console.log(items);

  //     let offset = (pageNum - 1) * pageSize;
  //     let data =
  //       offset + pageSize >= items.length
  //         ? items.slice(offset, items.length)
  //         : items.slice(offset, offset + pageSize);
  //         console.log(data);

  //     return data;
  //   }
  // },
  components: {
    HelloWorld
  },
  methods: {
    async getUser() {
      const res = await this.$http.get("/user");
      this.username = res.data.username;
    },

    // async fetch() {
    //   const res = await this.$http.get(
    //     "https://jsonplaceholder.typicode.com/posts"
    //   );
    //   this.items = res.data;
    //   console.log(this.items);
    // },
    async save() {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.model.title,
          body: this.model.textarea,
          userId: this.model.userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => this.items.push(json));
    },

    async remove(item) {
      this.$confirm(`Do you really want to delete this?`, "Notice", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
          method: "DELETE"
        });
        this.$message({
          type: "success",
          message: "Well done!"
        });

        //this.$store.dispatch("getPosts");
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.pageNum = val;
    }
  },
  created() {
    //this.fetch();
    this.getUser();
    this.$store.dispatch("getPosts");
  },
  computed: {
    reverseItems() {
      return this.items.reverse();
    },
    ...mapGetters(["items"])
  }
};
</script>
<style lang="scss">
.card {
  height: 15rem;
}
.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-text {
  overflow: hidden;
}
.no-gutters {
  margin-right: 5px;
  margin-left: 5px;

  > .col,
  > [class*="col-"] {
    padding-right: 5px;
    padding-left: 5px;
  }
}
.bottom-btn {
  position: absolute;
  bottom: 0;
  left: 25%;
  padding: 0 1rem;
  margin-bottom: 3px;
}
</style>