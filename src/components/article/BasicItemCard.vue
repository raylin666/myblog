<template>
    <div class="article-card">
        <RouterLink :to="{ name: 'articleInfo', params: { id: article.id } }" class="card-link"> 
            <a-card hoverable class="article-item">
                <template #cover>
                    <div class="cover-container">
                        <img
                        class="article-item-cover"
                        alt="article cover"
                        :src="article.cover"
                        />
                        <div class="cover-overlay"></div>
                    </div>
                </template>
                <a-card-meta>
                <template #title>
                    <a :href="`/article/${article.id}`" class="article-item-title">{{ article.title }}</a>
                </template>
                <template #description>
                    <div class="article-item-meta">
                        <div class="meta-item">
                            <icon-eye class="meta-icon" />
                            <span class="meta-text">{{ article.viewCount }}</span>
                        </div>
                        <div class="meta-item">
                            <icon-message class="meta-icon" />
                            <span class="meta-text">{{ article.commentCount || 0 }}</span>
                        </div>
                        <div class="meta-item">
                            <icon-user class="meta-icon" />
                            <span class="meta-text">{{ article.author }}</span>
                        </div>
                    </div>
                    <div class="article-item-desc">
                        {{ article.description }}
                    </div>
                    <div class="article-item-tags">
                        <a-tag v-for="tag in article.tags" :key="tag" :color="tagColor(tag)">{{ tag }}</a-tag>
                    </div>
                </template>
                </a-card-meta>
            </a-card>
        </RouterLink>
    </div>
</template>

<script lang="ts" setup name="BasicItemCard">
import { IconEye, IconUser, IconMessage } from '@arco-design/web-vue/es/icon'
import type { PropType } from 'vue'

defineProps({
    article: {
    type: Object as PropType<{
      id: number
      title: string
      cover: string
      date: string
      viewCount: string
      author: string
      tags: string[]
      description: string
      commentCount?: number
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
.card-link {
    text-decoration: none;
    cursor: pointer;
    display: block;
    height: 100%;
}

.card-link:hover {
    cursor: pointer;
}

.article-item {
    break-inside: auto;
    margin-bottom: 0;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    /* background: linear-gradient(145deg, #ffffff, #f0f0f0); */
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
    height: 100%;
    display: flex;
    flex-direction: column;
    border: none;
}

.article-item :deep(.arco-card-body) {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.article-item:hover {
    transform: translateY(-1px) scale(1.02);
}

.cover-container {
    position: relative;
    overflow: hidden;
}

.cover-container:hover .cover-overlay {
    opacity: 1;
    transform: scale(1);
}

.article-item-cover {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    background-color: #f5f5f5;
}

.cover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.4s ease;
}

.cover-overlay :deep(.arco-icon) {
    font-size: 36px;
    color: white;
}

.article-item:hover .article-item-cover {
    transform: scale(1.08);
}

.article-item-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
    color: #333;
    text-decoration: none;
    display: inline-block;
    transition: all 1.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    overflow: hidden;
    line-height: 1.4;
    background-image: linear-gradient(80deg, var(--gradient-base-0) 0%, var(--gradient-base-1) 100%);
    background-size: 0% 100%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
}

.article-item-title::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff4d4f, #1890ff);
    transition: width 0.8s ease;
}

.article-item-title:hover::after {
    width: 100%;
}

.article-item-title:hover {
    background-size: 100% 100%;
    color: transparent;
    transform: translateX(4px);
}

.article-item-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 13px;
    color: #888; 
    margin-bottom: 14px;
    padding: 12px 0;
    border-bottom: 1px dashed #eee;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 4px;
}

.meta-icon {
    font-size: 16px;
}

.meta-text {
    font-size: 13px;
}

.article-item-tags {
    margin: 12px 0;
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.article-item-tags :deep(.arco-tag) {
    margin-right: 0 !important;
    font-size: 11px; 
    padding: 0 6px; 
    border-radius: 8px; 
    transition: all 0.3s ease;
}

.article-item-tags :deep(.arco-tag:hover) {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.article-item-desc {
    font-size: 14px; 
    color: #666; 
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
}
</style>