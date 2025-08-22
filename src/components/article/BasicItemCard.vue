<template>
    <div class="article-card">
        <RouterLink :to="{ name: 'articleInfo', params: { id: article.id } }" class="card-link"> 
            <a-card hoverable>
                <template #cover>
                    <img
                    class="article-item-cover"
                    alt="article cover"
                    :src="article.cover"
                    />
                </template>
                <a-card-meta>
                <template #title>
                    <a :href="`/article/${article.id}`" class="article-item-title">{{ article.title }}</a>
                </template>
                <template #description>
                    <div class="article-item-meta">
                        <span class="read-count">
                            <icon-eye /> {{ article.viewCount }}
                        </span>
                        <span class="article-author">
                            <icon-user /> {{ article.author }}
                        </span>
                    </div>
                    <div class="article-item-tags">
                        <a-tag v-for="tag in article.tags" :key="tag" :color="tagColor(tag)">{{ tag }}</a-tag>
                    </div>
                    <div class="article-item-desc">
                        {{ article.description }}
                    </div>
                </template>
                </a-card-meta>
            </a-card>
        </RouterLink>
    </div>
</template>

<script lang="ts" setup name="BasicItemCard">
import { IconEye, IconUser } from '@arco-design/web-vue/es/icon'
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
}

.card-link:hover {
    cursor: pointer;
}

.article-item {
    break-inside: auto;
    margin-bottom: 0;
}

.article-item :deep(.arco-card) {
    background-color: #fafafa;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer; 
}

.article-item :deep(.arco-card-bordered) {
    border: none;
}

.article-item :deep(.arco-card):hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px); 
}

.article-item-cover {
    width: 100%;
    height: 160px;
    object-fit: cover;
    transition: transform 0.5s ease;
    background-color: #f5f5f5; 
}

.article-item :deep(.arco-card):hover .article-item-cover {
    transform: scale(1.03);
}

.article-item-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #444;
    text-decoration: none;
    display: inline-block;
    transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform-origin: left center;
    position: relative;
    overflow: hidden;
}

.article-item-title::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: 0.5s;
}

.article-item-title:hover::before {
    left: 100%;
}

.article-item-title:hover {
    background-image: linear-gradient(to right, rgb(215, 29, 29), rgb(7, 9, 7));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(1.1) translateX(3px);
    text-shadow: 0 2px 8px rgba(30, 136, 229, 0.15);
}

.article-item-meta {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #888; 
    margin-bottom: 10px;
}

.article-item-tags {
    margin-bottom: 10px;
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.article-item-tags :deep(.arco-tag) {
    margin-right: 0 !important;
    font-size: 11px; 
    padding: 0 6px; 
    border-radius: 4px; 
}

.article-item-desc {
    font-size: 12px; 
    color: #777; 
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 54px; 
}
</style>