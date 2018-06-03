<template>
<div>
  <div>
    <button @click="isShow = dialogVisible = true">登陆</button>
  </div>

  <el-dialog
    :show-close="false"
    title="登陆"
    center
    width="400px"
    :visible.sync="dialogVisible">
    <Login />
  </el-dialog>
</div>
</template>

<script>
import Login from './Login'
export default {
  data () {
    return {
      dialogVisible: false,
      isShow: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  },
  components: {
    Login
  }
}
</script>

<style lang="scss" scoped>
</style>
