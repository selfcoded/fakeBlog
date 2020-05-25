<template >
  <div>
    <div class="register">
      <el-card class="reg-card">
        <div class="logo mt-2 bg-light-grey">
          <logo class="logo-item" />
        </div>
        <section class="mt-4">
          <el-form
            @submit.native.prevent="register"
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            class="ruleForm"
          >
            <el-form-item prop="name">
              <el-input v-model="ruleForm.name" placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input v-model="ruleForm.pwd" type="password" placeholder="Password"></el-input>
            </el-form-item>
            <el-form-item prop="cpwd">
              <el-input v-model="ruleForm.cpwd" type="password" placeholder="Confirm password"></el-input>
            </el-form-item>
            <el-form-item class="d-flex jc-start">
              <el-button type="primary" native-type="submit" class="mr-4 ml-2">Register</el-button>

              <router-link to="/login" class="ml-5">
                <el-button type="primary">Login</el-button>
              </router-link>

              <div class="eror">{{error}}</div>
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
      statusMsg: "",
      error: "",
      ruleForm: {
        name: "",
        pwd: "",
        cpwd: ""
      },
      rules: {
        name: [
          {
            required: true,
            type: "string",
            message: "please type a nickname",
            trigger: "blur"
          }
        ],
        pwd: [
          {
            required: true,
            message: "please create your password",
            trigger: "blur"
          }
        ],
        cpwd: [
          {
            required: true,
            message: "please create your password",
            trigger: "blur"
          },
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("please type your password again"));
              } else if (value !== this.ruleForm.pwd) {
                callback(new Error("dont match"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ]
      }
    };
  },
  layout: "blank",
  methods: {
    register() {
      let self = this;
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          self.$http.post("/register", {
            username: self.ruleForm.name,
            password: self.ruleForm.pwd
          });
        }
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
.logo {
  border-radius: 0.3rem;
  margin: 0 auto;
}
.logo-item {
  margin: 0 auto;
}
.reg-card {
  border-radius: 0.2rem;
  width: 17.5rem;
  height: 22rem;
  margin: 10rem auto;
  background-color: #3f5c6d2c;
}
.el-input {
  width: 15rem;
}
.register {
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-image: url("../assets/imgs/img1.jpg");
  background-size: 100%;
}
/* .ruleForm {
  width: 600px;
  margin-left: 100px;
}
.register {
  height: 100px;
}
.header {
  height: 100px;
  margin-left: 100px;
} */
</style>