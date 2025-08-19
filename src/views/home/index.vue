<template>
    <TopBanner v-bind="{ aimPositionId: 'index-main' }" />

    <br />

    <a-row class="content" id="index-main">
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
                                <div class="cover-tag">置顶文章</div>
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
                                <div class="cover-tag">置顶文章</div>
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

            <a-row id="index-article-category">
                <a-col :span="24" class="article-category">
                    <div class="category-container">
                        <!-- 添加左右箭头按钮 -->
                        <div class="category-navigation">
                            <div class="nav-arrow left-arrow" @click="scrollCategories('left')">
                                <icon-left />
                            </div>
                            <div class="category-tags-wrapper">
                                <div class="category-tags" ref="categoryTagsRef">
                                    <a-tag 
                                        v-for="category in categories" 
                                        :key="category.name"
                                        :color="category.color"
                                        class="category-tag"
                                        @click="filterByCategory(category.name)"
                                    >
                                        {{ category.name }} ({{ category.count }})
                                    </a-tag>
                                </div>
                            </div>
                            <div class="nav-arrow right-arrow" @click="scrollCategories('right')">
                                <icon-right />
                            </div>
                        </div>
                    </div>
                </a-col>
            </a-row>

            <a-row>
                <a-col :span="24" class="article-list-item">
                    <div v-for="article in paginatedArticles" :key="article.id" class="article-item">
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
                                        <icon-eye /> {{ article.readCount }}
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
                    </div>
                </a-col>
            </a-row>

            <a-row>
                <a-col :span="24" class="pagination-container">
                    <a-pagination 
                        v-model:current="currentPage"
                        :total="totalArticles"
                        :page-size="pageSize"
                        :show-total="false"
                        :show-jumper="false"
                        @change="handlePageChange"
                        class="custom-pagination"
                    />
                </a-col>
            </a-row>
        </a-col>

        <a-col :span="6" id="side-main">
            <Side />
        </a-col>
    </a-row>
</template>

<script setup lang="ts" >
import { TopBanner, Side } from '@/components'
import articleCover from 'assets/articleCover.png'
import { IconEye, IconUser, IconLeft, IconRight } from '@arco-design/web-vue/es/icon'
import { useNProgress } from '@/hooks/useNProgress'
import { ref, computed } from 'vue'

// 使用封装的NProgress hooks
useNProgress()

// 文章分类数据
const categories = ref([
    { name: '全部', count: 15, color: 'arcoblue' },
    { name: '技术', count: 8, color: 'green' },
    { name: '设计', count: 4, color: 'purple' },
    { name: '生活', count: 2, color: 'orange' },
    { name: '教程', count: 6, color: 'cyan' },
    { name: '前端', count: 7, color: 'blue' },
    { name: '简历文档', count: 17, color: 'purple' },
    { name: '面试技巧', count: 27, color: 'green' },
    { name: '系统架构', count: 29, color: 'orange' },
    { name: '服务器', count: 12, color: 'cyan' },
])

function filterByCategory(category: string) {
    console.log('Filter by:', category)
    // 这里可以添加分类筛选逻辑
}

// 添加文章列表数据
const articles = ref([
    {
        id: 3,
        title: '深入理解JavaScript闭包',
        cover: articleCover,
        date: '2023-11-05',
        readCount: '856',
        author: '林山',
        tags: ['JavaScript', '前端', '技术'],
        description: '详细介绍JavaScript闭包的概念、使用场景以及常见误区，帮助开发者深入理解这一重要概念...'
    },
    {
        id: 4,
        title: 'CSS Grid布局完全指南',
        cover: articleCover,
        date: '2023-11-01',
        readCount: '1.5K',
        author: '林山',
        tags: ['CSS', '前端', '教程'],
        description: '全面介绍CSS Grid布局的使用方法，包括网格容器、网格项、对齐方式等核心概念和实际应用...'
    },
    {
        id: 5,
        title: 'React Hooks使用详解',
        cover: articleCover,
        date: '2023-10-28',
        readCount: '2.1K',
        author: '林山',
        tags: ['React', '前端', '技术'],
        description: '深入解析React Hooks的使用方法，包括useState、useEffect等常用Hooks的使用技巧和最佳实践...'
    },
    {
        id: 6,
        title: 'Node.js性能优化实战',
        cover: articleCover,
        date: '2023-10-25',
        readCount: '1.8K',
        author: '林山',
        tags: ['Node.js', '后端', '性能'],
        description: '分享Node.js性能优化的实用技巧，包括内存管理、异步处理、缓存策略等方面的优化方案...'
    },
    {
        id: 7,
        title: 'TypeScript高级类型详解',
        cover: articleCover,
        date: '2023-10-20',
        readCount: '1.3K',
        author: '林山',
        tags: ['TypeScript', '前端', '教程'],
        description: '详细介绍TypeScript中的高级类型概念，包括泛型、条件类型、映射类型等高级特性的使用...'
    },
    {
        id: 8,
        title: '微前端架构设计与实现',
        cover: articleCover,
        date: '2023-10-15',
        readCount: '2.7K',
        author: '林山',
        tags: ['架构', '前端', '微前端'],
        description: '探讨微前端架构的设计理念和实现方案，包括主流微前端框架的对比和实际项目应用经验...'
    },
    {
        id: 9,
        title: '微前端架构设计与实现',
        cover: articleCover,
        date: '2023-10-15',
        readCount: '2.7K',
        author: '林山',
        tags: ['架构', '前端', '微前端'],
        description: '探讨微前端架构的设计理念和实现方案，包括主流微前端框架的对比和实际项目应用经验...'
    },
    {
        id: 3,
        title: '深入理解JavaScript闭包',
        cover: articleCover,
        date: '2023-11-05',
        readCount: '856',
        author: '林山',
        tags: ['JavaScript', '前端', '技术'],
        description: '详细介绍JavaScript闭包的概念、使用场景以及常见误区，帮助开发者深入理解这一重要概念...'
    },
    {
        id: 4,
        title: 'CSS Grid布局完全指南',
        cover: articleCover,
        date: '2023-11-01',
        readCount: '1.5K',
        author: '林山',
        tags: ['CSS', '前端', '教程'],
        description: '全面介绍CSS Grid布局的使用方法，包括网格容器、网格项、对齐方式等核心概念和实际应用...'
    },
    {
        id: 5,
        title: 'React Hooks使用详解',
        cover: articleCover,
        date: '2023-10-28',
        readCount: '2.1K',
        author: '林山',
        tags: ['React', '前端', '技术'],
        description: '深入解析React Hooks的使用方法，包括useState、useEffect等常用Hooks的使用技巧和最佳实践...'
    },
    {
        id: 6,
        title: 'Node.js性能优化实战',
        cover: articleCover,
        date: '2023-10-25',
        readCount: '1.8K',
        author: '林山',
        tags: ['Node.js', '后端', '性能'],
        description: '分享Node.js性能优化的实用技巧，包括内存管理、异步处理、缓存策略等方面的优化方案...'
    },
    {
        id: 7,
        title: 'TypeScript高级类型详解',
        cover: articleCover,
        date: '2023-10-20',
        readCount: '1.3K',
        author: '林山',
        tags: ['TypeScript', '前端', '教程'],
        description: '详细介绍TypeScript中的高级类型概念，包括泛型、条件类型、映射类型等高级特性的使用...'
    },
    {
        id: 8,
        title: '微前端架构设计与实现',
        cover: articleCover,
        date: '2023-10-15',
        readCount: '2.7K',
        author: '林山',
        tags: ['架构', '前端', '微前端'],
        description: '探讨微前端架构的设计理念和实现方案，包括主流微前端框架的对比和实际项目应用经验...'
    },
    {
        id: 9,
        title: '微前端架构设计与实现',
        cover: articleCover,
        date: '2023-10-15',
        readCount: '2.7K',
        author: '林山',
        tags: ['架构', '前端', '微前端'],
        description: '探讨微前端架构的设计理念和实现方案，包括主流微前端框架的对比和实际项目应用经验...'
    }
])

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

const currentPage = ref(1);
const pageSize = ref(9);
const totalArticles = ref(articles.value.length);

// 计算当前页显示的文章
const paginatedArticles = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return articles.value.slice(start, end);
});

const handlePageChange = (page: number) => {
    currentPage.value = page;
    // 滚动到列表顶部
    const element = document.getElementById('index-article-category');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// 添加分类标签的引用
const categoryTagsRef = ref<HTMLElement | null>(null)

// 添加滚动分类标签的方法
const scrollCategories = (direction: 'left' | 'right') => {
    if (categoryTagsRef.value) {
        const scrollAmount = 200
        const scrollOptions: ScrollToOptions = {
            behavior: 'smooth'
        }
        
        if (direction === 'left') {
            scrollOptions.left = categoryTagsRef.value.scrollLeft - scrollAmount
        } else {
            scrollOptions.left = categoryTagsRef.value.scrollLeft + scrollAmount
        }
        
        categoryTagsRef.value.scrollTo(scrollOptions)
    }
}

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
    top: 0;
    left: 0;
    background-color: var(--primary-color);
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
    position: relative;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.article-title::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(160deg, #ff7c09, #14c52b);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform-origin: left;
}

.article-title:hover {
    background-image: linear-gradient(to right, rgb(215, 29, 29), rgb(7, 9, 7));
    background-clip: text;
    color: transparent;
    transform: translateY(-2px);
}

.article-title:hover::after {
    width: 100%;
    box-shadow: 0 0 10px rgba(30, 136, 229, 0.3);
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

.category-container {
    background: var(--bg-color-secondary);
    border-radius: 12px;
    padding: 8px 20px;
    margin-bottom: 20px;
    backdrop-filter: blur(5px);
    overflow: hidden;
    margin-right: 10px;
}

/* 添加分类导航容器 */
.category-navigation {
    display: flex;
    align-items: center;
    position: relative;
}

/* 添加箭头样式 */
.nav-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 2;
}

.nav-arrow:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.nav-arrow.left-arrow {
    margin-right: 10px;
}

.nav-arrow.right-arrow {
    margin-left: 10px;
}

/* 包装器用于隐藏滚动条但保持功能 */
.category-tags-wrapper {
    flex: 1;
    overflow: hidden;
}

.category-tags {
    display: flex;
    gap: 12px;
    padding: 8px 4px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin: 0 -4px;
    overflow-x: auto;
    scroll-behavior: smooth;
}

.category-tags::-webkit-scrollbar {
    display: none;
}

.category-tag {
    padding: 18px 18px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
    flex-shrink: 0;
    border: none;
}
.category-tag:hover {
    transform: scale(1.03);
    z-index: 1;
    animation: shake 0.5s ease infinite;
}

@keyframes shake {
    0%, 100% { transform: translateX(0) scale(1.03); }
    25% { transform: translateX(-2px) scale(1.03); }
    50% { transform: translateX(2px) scale(1.03); }
    75% { transform: translateX(-2px) scale(1.03); }
}

/* 分类标签配色调整 */
.category-tag[color="arcoblue"] {
    background-color: rgba(30, 136, 229, 0.1);
    color: #1e88e5;
}

.category-tag[color="green"] {
    background-color: rgba(76, 175, 80, 0.1);
    color: #4caf50;
}

.category-tag[color="purple"] {
    background-color: rgba(156, 39, 176, 0.1);
    color: #9c27b0;
}

.category-tag[color="orange"] {
    background-color: rgba(255, 152, 0, 0.1);
    color: #ff9800;
}

.category-tag[color="cyan"] {
    background-color: rgba(0, 188, 212, 0.1);
    color: #00bcd4;
}

.category-tag[color="blue"] {
    background-color: rgba(33, 150, 243, 0.1);
    color: #2196f3;
}

/* 修改文章列表样式，区别于置顶文章 */
.article-list-item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0 10px 0 0;
}

.article-item {
    break-inside: auto;
    margin-bottom: 0;
}

.article-item :deep(.arco-card) {
    background-color: #fafafa; /* 更浅的背景色 */
    border-radius: 8px; /* 稍小的圆角 */
    overflow: hidden;
    transition: all 0.3s ease;
}

.article-item :deep(.arco-card-bordered) {
    border: none;
}

.article-item :deep(.arco-card):hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); /* 悬停时的阴影 */
    transform: translateY(-3px); /* 较小的上移距离 */
}

.article-item-cover {
    width: 100%;
    height: 160px; /* 稍小的高度 */
    object-fit: cover;
    transition: transform 0.5s ease;
}

.article-item :deep(.arco-card):hover .article-item-cover {
    transform: scale(1.03); /* 较小的缩放比例 */
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
}

.article-item-title:hover {
    background-image: linear-gradient(to right, rgb(215, 29, 29), rgb(7, 9, 7));
    background-clip: text;
    color: transparent;
    transform: scale(1.1) translateX(3px);
    text-shadow: 0 2px 8px rgba(30, 136, 229, 0.15);
}

.article-item-meta {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #888; /* 更浅的颜色 */
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
    font-size: 11px; /* 更小的字体 */
    padding: 0 6px; /* 更小的内边距 */
    border-radius: 4px; /* 更小的圆角 */
}

.article-item-desc {
    font-size: 12px; /* 更小的字体 */
    color: #777; /* 更浅的颜色 */
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 54px; /* 调整最小高度 */
}

.pagination-container {
    margin-top: 30px;
    display: flex;
    justify-content: center;
}

.custom-pagination :deep(.arco-pagination-item) {
    border-radius: 8px;
    margin: 0 4px;
    color: #718096;
    border: 1px solid #e2e8f0;
    background-color: #ffffff;
    transition: all 0.3s ease;
}

.custom-pagination :deep(.arco-pagination-item-active) {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-color: transparent;
    color: white;
}

.custom-pagination :deep(.arco-pagination-item:hover) {
    background-color: #f7fafc;
    border-color: #cbd5e0;
    color: #2d3748;
}

.custom-pagination :deep(.arco-pagination-item-active:hover) {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-color: transparent;
    color: white;
}
</style>