<template lang="html">
<div class="header navbar animated">
  <div class="container">
    <nav id="primary-navigation" class="site-navigation primary-navigation">
      <div class="menum">
        <ul class="nav-menu">
          <li class="menu-item"><router-link href="#" to="/blog"><i class="fa fa-home"></i>首页</router-link></li>
          <li class="menu-item"><router-link to="/blog"><i class="fa fa-comment"></i>留言</router-link></li>
          <li class="menu-item"><router-link to="/blog"><i class="fa fa-user"></i>关于</router-link></li>
          <li class="menu-item"><a  @click="dialogVisible" >登陆</a></li>
          <li class="menu-item"><a @click="dialogVisible1">注册</a></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
// 实现导航条的自动显示
import Headroom from 'headroom.js'
import { unique } from '@/assets/js/unique';
export default {
  methods: {
    getOne (tag) {
      this.$emit('shareOne', tag)
      this.$router.push({path:'/blog'})
    }
  },
  mounted () {
    var myElement = document.querySelector(".header");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement, {
      "tolerance": 1,
      "offset": 10,
      "classes": {
        "initial": "animated",
        "pinned": "slideDown",
        "unpinned": "slideUp"
      }
    });
    headroom.init();
  },
  methods: {
    dialogVisible () {
      this.$emit('setDialogVisible', true)
    },
    dialogVisible1 () {
      this.$emit('setDialogVisible1', true)
    }
  }
}
</script>
