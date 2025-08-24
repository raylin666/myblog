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
    content: '感谢分享，对我帮助很大,这篇文章写得真好，学到了很多新知识！,这篇文章写得真好，学到了很多新知识！这篇文章写得真好，学到了很多新知识！这篇文章写得真好，学到了很多新知识！',
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
.sidebar-module {
    background: var(--background-secondary);
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    color: var(--text-primary);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.module-title {
    font-size: 18px;
    font-weight: bold;
    color: var(--text-primary);
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border-color);
}

.comment-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.comment-item {
    padding: 15px;
    background-color: var(--background-primary);
    border-radius: 8px;
    font-size: 13px;
    transition: all 0.2s ease;
    border: 1px solid #efefef;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.comment-item:hover {
    background-color: var(--background-secondary);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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
    color: var(--text-secondary);
    margin-top: 2px;
}

.comment-author {
    font-weight: bold;
    color: var(--text-primary);
}

.comment-content {
    color: var(--text-primary);
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
    color: var(--text-secondary);
    font-size: 12px;
    text-align: right;
    margin-top: 10px;
}
</style>