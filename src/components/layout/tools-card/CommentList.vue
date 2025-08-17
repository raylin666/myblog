<template>
    <!-- 最新评论模块 -->
    <div class="sidebar-module">
        <div class="module-title">最新评论</div>
        <div class="comment-list">
<div class="comment-item" v-for="comment in latestComments" :key="comment.id">
<div class="comment-header">
    <a-avatar>
        <img :src="comment.avatar || avatarUrl" alt="avatar">
    </a-avatar>
    <div class="comment-user-info">
        <div class="comment-author">{{ comment.author }}</div>
        <div class="comment-time">{{ comment.time || '刚刚' }}</div>
    </div>
</div>
    <div class="comment-content">{{ comment.content }}</div>
    <div class="comment-article">《{{ comment.article }}》</div>
</div>
        </div>
    </div>
</template>

<script setup lang="ts" name="CommentList">
import { ref } from 'vue'
import avatarUrl from 'assets/avatar.png'

// 最新评论数据
const latestComments = ref([
  {
    id: 1,
    author: '张三',
    avatar: avatarUrl,
    time: '2小时前',
    content: '这篇文章写得真好，学到了很多新知识！',
    article: 'Vue 3 Composition API 最佳实践'
  },
  {
    id: 2,
    author: '李四',
    avatar: avatarUrl,
    time: '昨天',
    content: '感谢分享，对我帮助很大,这篇文章写得真好，学到了很多新知识！,这篇文章写得真好，学到了很多新知识！这篇文章写得真好，学到了很多新知识！这篇文章写得真好，学到了很多新知识！这篇文章写得真好，学到了很多新知识！',
    article: '现代Web设计趋势与实现'
  },
  {
    id: 3,
    author: '王五',
    avatar: avatarUrl,
    time: '3天前',
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
    padding: 12px;
    background-color: #f8f9fa;
    border-radius: 8px;
    font-size: 13px;
    transition: all 0.3s ease;
}

.comment-item:hover {
    background-color: #f0f2f5;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.comment-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
}

.comment-user-info {
    display: flex;
    flex-direction: column;
}

.comment-time {
    font-size: 12px;
    color: #999;
    margin-top: 2px;
}

.comment-author {
    font-weight: bold;
    color: #1e88e5;
}

.comment-content {
    color: #323232;
    margin-bottom: 5px;
    line-height: 1.4;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.comment-article {
    color: #999;
    font-size: 12px;
    text-align: right;
    margin-top: 10px;
}
</style>