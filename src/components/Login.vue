<template>
  <el-form :model="ruleForm"
           :rules="rules"
           ref="ruleForm"
           label-position="left"
           label-width="0px"
           class="demo-ruleForm login-container">
    <el-form-item prop="account">
      <el-input type="text"
                v-model="ruleForm.account"
                auto-complete="off"
                placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password"
                v-model="ruleForm.checkPass"
                auto-complete="off"
                placeholder="密码">
      </el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary"
                 style="width:100%;"
                 @click.native.prevent="handleSubmit"
                 :loading="logining">
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      logining: false,
      ruleForm: {
        account: '',
        checkPass: ''
      },
      rules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        checkPass: [
          {required: true, message: '请输入密码', trigger: 'blur'}
          // { validator: validaePass2 }
        ]
      },
      checked: true
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true
          this.$message({
            message: '登陆成功',
            type: 'success'
          })
          let user = {
            name: this.ruleForm.account,
            avatar: this.ruleForm.checkPass
          }
          sessionStorage.setItem('user', JSON.stringify(user))
          this.$router.push({ path: '/ok' })
        } else {
          this.$message({
            message: '请输入账号密码',
            type: 'error'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
