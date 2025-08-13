<template>
    <!-- 最新评论模块 -->
    <div class="sidebar-module">
        <div class="module-title">最新评论</div>
        <div class="comment-list">
            <div class="comment-item" v-for="comment in latestComments" :key="comment.id">
                <div class="comment-author">{{ comment.author }}</div>
                <div class="comment-content">{{ comment.content }}</div>
                <div class="comment-article">《{{ comment.article }}》</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="CommentList">
import { ref } from 'vue'

// 最新评论数据
const latestComments = ref([
  {
    id: 1,
    author: '张三',
    content: '这篇文章写得真好，学到了很多新知识！',
    article: 'Vue 3 Composition API 最佳实践'
  },
  {
    id: 2,
    author: '李四',
    content: '感谢分享，对我帮助很大',
    article: '现代Web设计趋势与实现'
  },
  {
    id: 3,
    author: '王五',
    content: '期待更多类似的文章',
    article: 'Vue 3 Composition API 最佳实践'
  }
])
</script>

<style scoped>
/* 侧边栏模块样式 */
.sidebar-module {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.module-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

/* 最新评论样式 */
.comment-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.comment-item {
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 5px;
    font-size: 13px;
}

.comment-author {
    font-weight: bold;
    color: #1e88e5;
    margin-bottom: 5px;
}

.comment-content {
    color: #666;
    margin-bottom: 5px;
    line-height: 1.4;
}

.comment-article {
    color: #999;
    font-size: 12px;
    text-align: right;
}
</style>