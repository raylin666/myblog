<template>
    <a-row class="content">
        <a-col :span="18" class="article">
            <a-row>
                <a-col :span="12">
                    <div class="article-card">
                        <a-card hoverable>
                            <template #cover>
                            <div class="cover-container">
                                <img
                                class="cover-image"
                                alt="article cover"
                                :src="articleCover"
                                />
                                <div class="cover-tag">技术</div>
                                <div class="cover-date">2023-11-15</div>
                            </div>
                            </template>
                            <a-card-meta>
                            <template #title>
                                <a href="/article/1" class="article-title">Vue 3 Composition API 最佳实践</a>
                            </template>
                            <template #description>
                                <div class="article-meta">
                                    <span class="read-count">
                                        <icon-eye /> 1.2K
                                    </span>
                                    <span class="article-author">
                                        <icon-user /> 林山
                                    </span>
                                </div>
                                <div class="article-tags">
                                    <a-tag color="blue">Vue</a-tag>
                                    <a-tag color="green">前端</a-tag>
                                    <a-tag color="orange">教程</a-tag>
                                </div>
                                <div class="article-desc">
                                    本文详细介绍了Vue 3 Composition API的使用技巧和最佳实践，帮助开发者更好地组织组件逻辑...
                                </div>
                            </template>
                            </a-card-meta>
                        </a-card>
                    </div>
                </a-col>
                <a-col :span="12">
                    <div class="article-card">
                        <a-card hoverable>
                            <template #cover>
                            <div class="cover-container">
                                <img
                                class="cover-image"
                                alt="article cover"
                                :src="articleCover"
                                />
                                <div class="cover-tag">设计</div>
                                <div class="cover-date">2023-11-10</div>
                            </div>
                            </template>
                            <a-card-meta>
                            <template #title>
                                <a href="/article/2" class="article-title">现代Web设计趋势与实现</a>
                            </template>
                            <template #description>
                                <div class="article-meta">
                                    <span class="read-count">
                                        <icon-eye /> 2.4K
                                    </span>
                                    <span class="article-author">
                                        <icon-user /> 林山
                                    </span>
                                </div>
                                <div class="article-tags">
                                    <a-tag color="purple">UI/UX</a-tag>
                                    <a-tag color="red">设计</a-tag>
                                    <a-tag color="cyan">CSS</a-tag>
                                </div>
                                <div class="article-desc">
                                    探索2023年最新的Web设计趋势，包括玻璃拟态、微交互和动态渐变等效，包括玻璃拟态、微交互和动态渐变等效，包括玻璃拟态、微交互和动态渐变等效
                                    ，包括玻璃拟态、微交互和动态渐变等效，包括玻璃拟态、微交互和动态渐变等效果的实现方式...
                                </div>
                            </template>
                            </a-card-meta>
                        </a-card>
                    </div>
                </a-col>
            </a-row>

            <br />

            <a-row>
                <a-col :span="24">
                    <div class="article-card">
                        <a-card hoverable>
                            <template #cover>
                            <div class="cover-container">
                                <img
                                class="cover-image"
                                alt="article cover"
                                :src="articleCover"
                                />
                                <div class="cover-tag">设计</div>
                                <div class="cover-date">2023-11-10</div>
                            </div>
                            </template>
                            <a-card-meta>
                            <template #title>
                                <a href="/article/2" class="article-title">现代Web设计趋势与实现</a>
                            </template>
                            <template #description>
                                <div class="article-meta">
                                    <span class="read-count">
                                        <icon-eye /> 2.4K
                                    </span>
                                    <span class="article-author">
                                        <icon-user /> 林山
                                    </span>
                                </div>
                                <div class="article-tags">
                                    <a-tag color="purple">UI/UX</a-tag>
                                    <a-tag color="red">设计</a-tag>
                                    <a-tag color="cyan">CSS</a-tag>
                                </div>
                                <div class="article-desc">
                                    探索2023年最新的Web设计趋势，包括玻璃拟态、微交互和动态渐变等效，包括玻璃拟态、微交互和动态渐变等效，包括玻璃拟态、微交互和动态渐变等效
                                    ，包括玻璃拟态、微交互和动态渐变等效，包括玻璃拟态、微交互和动态渐变等效果的实现方式...
                                </div>
                            </template>
                            </a-card-meta>
                        </a-card>
                    </div>
                </a-col>
            </a-row>
        </a-col>

        <a-col :span="6" id="side-main">
            <Side />
        </a-col>
    </a-row>
</template>

<script setup lang="ts" >
import { Side } from '@/components'
import articleCover from 'assets/articleCover.png'
import { IconEye, IconUser } from '@arco-design/web-vue/es/icon'
import { useNProgress } from '@/hooks/useNProgress'

// 使用封装的NProgress hooks
useNProgress()
</script>

<style scoped>
.content .article-card {
    padding: 0px 10px 0px 0px;
}
.content .article-card :deep(.arco-card) {
    background-color: white;
    border-radius: 10px;
    border: 0px;
    overflow: hidden;
}
.content .article-card :deep(.arco-card):hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}
.content .article-card :deep(.arco-card-body) {
    padding: 16px;
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
}

.article-card:hover .cover-image {
    transform: scale(1.05);
}

.cover-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
}

.cover-date {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    color: #333;
}

.article-title {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 8px;
    color: #333;
    text-decoration: none;
    display: inline-block;
    background-image: linear-gradient(to right, #333, #333);
    background-size: 0% 2px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size 0.3s ease, color 0.3s ease;
}

.article-title:hover {
    color: #000000;
    background-size: 100% 3px;
    background-image: linear-gradient(to right, #1e88e5, #14c52b);
}

.article-meta {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
}

.article-tags {
    margin-bottom: 12px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.article-tags :deep(.arco-tag) {
    margin-right: 0 !important;
}
.article-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 63px; /* 3行文字高度 */
}
</style>
