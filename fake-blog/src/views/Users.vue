<template>
  <div class="home p-4">
    <template v-if="username">
      <div class="content-header">
        <div class="py-2 mb-3 d-flex ai-center jc-center">
          <span class="pr-3">ADD YOUR ACCOUNT</span>
          <el-button type="primary" size="small" @click="show=true">+</el-button>
        </div>

        <div v-show="show">
          <div class="account-popdown">
            <div class="left">
              <el-row class="px-5" style="width: 100%">
                <el-input class="mb-2" placeholder="name" v-model="newData.name"></el-input>
                <el-input class="mb-2" placeholder="email" v-model="newData.email"></el-input>
                <el-input class="mb-2" placeholder="city" v-model="newData.address.city"></el-input>
                <el-input class="mb-2" placeholder="street" v-model="newData.address.street"></el-input>
              </el-row>
            </div>
            <div class="right">
              <el-row class="px-5" style="width: 100%">
                <el-input class="mb-2" placeholder="suite" v-model="newData.address.suite"></el-input>
                <el-input class="mb-2" placeholder="phone" v-model="newData.phone"></el-input>
                <el-input class="mb-2" placeholder="website" v-model="newData.website"></el-input>
                <div class="text-right d-flex jc-around">
                  <el-button type="danger" @click="show=false">Cancel</el-button>
                  <el-button type="primary" @click="submit">Submit</el-button>
                </div>
              </el-row>
            </div>
          </div>
          <div class="account-popdown1">
            <el-row class="px-5" style="width: 100%">
              <el-input class="mb-2" placeholder="name" v-model="newData.name"></el-input>
              <el-input class="mb-2" placeholder="email" v-model="newData.email"></el-input>
              <el-input class="mb-2" placeholder="city" v-model="newData.address.city"></el-input>
              <el-input class="mb-2" placeholder="street" v-model="newData.address.street"></el-input>
              <el-input class="mb-2" placeholder="suite" v-model="newData.address.suite"></el-input>
              <el-input class="mb-2" placeholder="phone" v-model="newData.phone"></el-input>
              <el-input class="mb-2" placeholder="website" v-model="newData.website"></el-input>
              <div class="text-right d-flex jc-around pb-2">
                <el-button type="danger" size="small" @click="show=false">Cancel</el-button>
                <el-button type="primary" size="small" @click="submit">Submit</el-button>
              </div>
            </el-row>
          </div>
        </div>
      </div>
    </template>
    <div>
      <el-table :data="tableData | pagination(pageNum,pageSize)" style="width: 100%">
        <el-table-column prop="name" label="Name" width="170"></el-table-column>
        <el-table-column prop="email" label="Email" width="200"></el-table-column>
        <el-table-column prop="address.city" label="City" width="130"></el-table-column>
        <el-table-column prop="address.street" label="Street" width="150"></el-table-column>
        <el-table-column prop="address.suite" label="Suite" width="100"></el-table-column>
        <el-table-column prop="phone" label="Telephone" width="200"></el-table-column>
        <el-table-column prop="website" label="Website" width="200"></el-table-column>
        <el-table-column label="Operation" width="100" v-if="username">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="small"
              circle
              @click="$router.push(`/edituser/${scope.row.id}`)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="small"
              circle
              @click="remove(scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="text-right mt-4"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-size="pageSize"
        layout=" prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      newData: {
        address: []
      },
      name: "",
      //tableData: [],
      pageNum: 1,
      pageSize: 5,
      show: false,
      username: ""
    };
  },
  name: "Home",
  filters: {
    pagination(tableData, pageNum, pageSize) {
      let offset = (pageNum - 1) * pageSize;
      let data =
        offset + pageSize >= tableData.length
          ? tableData.slice(offset, tableData.length)
          : tableData.slice(offset, offset + pageSize);
      //console.log(tableData);

      return data;
    }
  },

  components: {
    HelloWorld
  },

  methods: {
    // async get() {
    //   const res = await this.$http.get(
    //     "https://jsonplaceholder.typicode.com/users"
    //   );
    //   this.tableData = res.data;
    // },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.pageNum = val;
    },
    async getUser() {
      const res = await this.$http.get("/user");
      this.username = res.data.username;
    },
    async submit() {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
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
      })
        .then(response => response.json())
        .then(json => this.tableData.push(json));
      this.$message({
        type: "success",
        message: "Well done!"
      });
    },
    async remove(row) {
      this.$confirm(`Do you really want to delete this?`, "Notice", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${row.id}`, {
          method: "DELETE"
        });
        this.$message({
          type: "success",
          message: "Well done!"
        });
      });
    }
  },
  created() {
    //this.get();
    this.getUser();
    this.$store.dispatch("getUsers");
  },
  computed: {
    ...mapGetters(["tableData"])
  }
};
</script>
<style>
.content-header {
  border: 0.1rem solid #409eff;
}
@media screen and (max-width: 768px) {
  .account-popdown {
    display: none;
  }
}
.content-header {
  width: 100%;
}
@media screen and (min-width: 768px) {
  .account-popdown1 {
    display: none;
  }
  .account-popdown {
    display: flex;
  }
}
</style>
