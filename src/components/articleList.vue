<template lang="html">
<div class="article-list">
  <article class="block post wysiwyg" v-for="item in list">
    <h2>{{item.title}}</h2>
    <p class="article-meta">发布于 {{item.createDate}}</p>
    <!--<div class="ui ribbon label red">-->
      <!--<a>{{item.tag}}</a>-->
    <!--</div>-->
    <div class="abstract" v-html="item.content.html">
    </div>
    <p class="more"><a>阅读全文</a></p>
  </article>
  <div class="pages">
    <el-pagination
      style="float: right;"
      background
      layout="prev, pager, next"
      :total="200">
    </el-pagination>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: 1,
      pageSize: 10,
      count: 0
    }
  },
  mounted () {
    this.getlist()
  },
  methods: {
    getlist () {
      let res = require('../../static/data/articleList')
      this.list = res.result.list
    }
  }
}
</script>

<style>
.article-list {
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 16px 24px 1px rgba(0, 0, 0, 0.14),
              0 6px 50px 1px rgba(0, 0, 0, 0.12),
              0 6px 10px -5px rgba(0, 0, 0, 0.2);
}
</style>
