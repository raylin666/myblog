<template>
    <div class="article-card">
        <RouterLink :to="{ name: 'articleInfo', params: { id: article.id } }" class="card-link"> 
            <a-card hoverable class="featured-card">
                <template #cover>
                <div class="cover-container">
                    <img
                    class="cover-image"
                    alt="article cover"
                    :src="article.cover"
                    />
                    <div class="cover-tag">{{ article.tagName }}</div>
                    <div class="cover-date">{{ article.date }}</div>
                </div>
                </template>
                <a-card-meta>
                <template #title>
                    <a href="/article/1" class="article-title">{{ article.title }}</a>
                </template>
                <template #description>
                    <div class="article-meta">
                        <span class="read-count">
                            <icon-eye /> {{ article.viewCount }}
                        </span>
                        <span class="article-author">
                            <icon-user /> {{ article.author }}
                        </span>
                    </div>
                    <div class="article-tags">
                        <a-tag v-for="tag in article.tags" :key="tag" :color="tagColor(tag)">{{ tag }}</a-tag>
                    </div>
                    <div class="article-desc">
                        {{ article.description }}
                    </div>
                </template>
                </a-card-meta>
            </a-card>
        </RouterLink>
    </div>
</template>

<script lang="ts" setup name="WithLabelItemCard">
import type { PropType } from 'vue'

defineProps({
    article: {
    type: Object as PropType<{
      id: number
      tagName: string
      title: string
      cover: string
      date: string
      viewCount: string
      author: string
      tags: string[]
      description: string
    }>,
    required: true
  }
})

function tagColor(tag: string) {
    switch (tag) {
        case 'Vue':
            return 'blue'
        case '前端':
            return 'green'
        case '教程':
            return 'orange'
        case 'UI/UX':
            return 'purple'
        case '设计':
            return 'red'
        case 'CSS':
            return 'cyan'
        case 'JavaScript':
            return 'arcoblue'
        case 'React':
            return 'green'
        case '性能':
            return 'purple'
        case 'TypeScript':
            return 'cyan'
        case '架构':
            return 'blue'
        case '微前端':
            return 'arcoblue'
        default:
            return 'orange'
    }
}
</script>

<style scoped>
.article-card {
    padding: 0px 16px 0px 0px;
}

.card-link {
    text-decoration: none;
    cursor: pointer;
}

.card-link:hover {
    cursor: pointer;
}

.featured-card {
    height: 500px;
    display: flex;
    flex-direction: column;
}
.featured-card :deep(.arco-card-body) {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.featured-card :deep(.arco-card-meta) {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.featured-card :deep(.arco-card-meta .arco-card-meta-content) {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.featured-card :deep(.arco-card-meta .arco-card-meta-description) {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.article-card :deep(.arco-card) {
    background-color: white;
    border-radius: 10px;
    border: 0px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    z-index: 1;
}
.article-card :deep(.arco-card)::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    z-index: -1;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.article-card :deep(.arco-card):hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}
.article-card :deep(.arco-card):hover::after {
    opacity: 1;
}
.article-card :deep(.arco-card-body) {
    padding: 20px;
    position: relative;
    z-index: 2;
    background: white;

}

.cover-container {
    position: relative;
    height: 240px;
    overflow: hidden;
}

.cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    background-color: #f5f5f5;
}

.article-card:hover .cover-image {
    transform: scale(1.05);
}

.cover-tag {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(135deg, var(--gradient-base-0) 0%, var(--gradient-base-1) 100%);
    color: white;
    padding: 8px 16px;
    border-radius: 0 0 10px 0;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 2;
}

.cover-date {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    color: #333;
}

.article-title {
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 16px;
    background: linear-gradient(135deg, var(--gradient-base-0) 0%, var(--gradient-base-1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-decoration: none;
    display: inline-block;
    position: relative;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
    line-height: 1.4;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.article-title::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(135deg, var(--gradient-base-0) 0%, var(--gradient-base-1) 100%);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform-origin: left;
}

.article-title::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    transition: 0.5s;
}

.article-title:hover::before {
    left: 100%;
}

.article-title:hover {
    transform: translateY(-3px);
    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.article-title:hover::after {
    width: 100%;
    box-shadow: 0 0 15px rgba(102, 126, 234, 0.4);
}

.article-meta {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 14px;
    color: #718096;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #edf2f7;
}

.article-meta :deep(.arco-icon) {
    margin-right: 6px;
    font-size: 16px;
    vertical-align: middle;
}

.read-count, .article-author {
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s ease;
}

.read-count:hover, .article-author:hover {
    color: #1e88e5;
    transform: translateY(-2px);
}

.article-tags {
    margin-bottom: 16px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.article-tags :deep(.arco-tag) {
    margin-right: 0 !important;
    border-radius: 20px;
    padding: 2px 14px;
    font-size: 13px;
    font-weight: 500;
    border: none;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.article-tags :deep(.arco-tag:hover) {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
}

.article-tags :deep(.arco-tag[color="blue"]) {
    background: linear-gradient(120deg, #4facfe 0%, #00f2fe 100%);
    color: white;
}

.article-tags :deep(.arco-tag[color="green"]) {
    background: linear-gradient(120deg, #43e97b 0%, #38f9d7 100%);
    color: white;
}

.article-tags :deep(.arco-tag[color="orange"]) {
    background: linear-gradient(120deg, #fa709a 0%, #fee140 100%);
    color: white;
}

.article-tags :deep(.arco-tag[color="purple"]) {
    background: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
    color: white;
}

.article-tags :deep(.arco-tag[color="red"]) {
    background: linear-gradient(120deg, #ff6b6b 0%, #ffa502 100%);
    color: white;
}

.article-tags :deep(.arco-tag[color="cyan"]) {
    background: linear-gradient(120deg, #6bede4 0%, #4ca1af 100%);
    color: white;
}

.article-desc {
    font-size: 15px;
    color: #4a5568;
    line-height: 1.7;
    position: relative;
    padding-left: 15px;
    /* 修改: 使用渐变色边框 */
    border-left: 3px solid;
    border-image: linear-gradient(0deg, var(--gradient-base-0) 0%, var(--gradient-base-1) 100%);
    border-image-slice: 1;
    font-weight: 400;
    letter-spacing: 0.3px;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.article-desc::before {
    content: '"';
    position: absolute;
    left: -20px;
    top: -15px;
    font-size: 60px;
    color: #e2e8f0;
    font-family: Georgia, serif;
    line-height: 1;
}
</style>