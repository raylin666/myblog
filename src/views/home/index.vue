<template>
    <TopBanner v-bind="{ aimPositionId: 'index-main' }" />

    <div id="index-main">
        <ContentRow>
            <a-col :span="18" class="article">
                <a-row>
                    <a-col :span="12" v-for="article in recommendArticles" :key="article.id">
                        <ArticleWithLabelItemCard :article="article" />
                    </a-col>
                </a-row>

                <br />

                <a-row id="index-article-category">
                    <a-col :span="24" class="article-category">
                        <ArticleCategoryCard />
                    </a-col>
                </a-row>

                <a-row>
                    <a-col :span="24" class="article-list-item">
                        <div v-for="article in paginatedArticles" :key="article.id" class="article-item">
                            <ArticleBasicItemCard :article="article" />
                        </div>
                    </a-col>
                </a-row>

                <a-row>
                    <a-col :span="24" class="pagination-container">
                        <Pagination @handlePageChange="handlePageChange" v-bind="{ currentPage: currentPage, pageSize: pageSize, total: total }" />
                    </a-col>
                </a-row>
            </a-col>

            <a-col :span="6" id="side-main">
                <Side />
            </a-col>
        </ContentRow>
    </div>
</template>

<script setup lang="ts">
import { 
    TopBanner, 
    ContentRow, 
    ArticleCategoryCard,
    ArticleWithLabelItemCard, 
    ArticleBasicItemCard,
    Side,
    Pagination,
 } from '@/components'
import articleCover from 'assets/articleCover.png'
import articleRecommendCover from 'assets/articleRecommendCover.png'
import { useNProgress } from '@/hooks/useNProgress'
import { ref, computed } from 'vue'

// 使用封装的NProgress hooks
useNProgress()

// 添加置顶文章列表数据
const recommendArticles = ref([
    {
        id: 1,
        tagName: '置顶文章',
        title: 'Vue 3 Composition API 最佳实践',
        cover: articleRecommendCover,
        date: '2023-11-05',
        viewCount: '1.2K',
        author: '林山',
        tags: ['JavaScript', '前端', '技术'],
        description: '本文详细介绍了Vue 3 Composition API的使用技巧和最佳实践，帮助开发者更好地组织组件逻辑...'
    },
    {
        id: 2,
        tagName: '置顶文章',
        title: '深入理解JavaScript闭包',
        cover: articleRecommendCover,
        date: '2023-11-05',
        viewCount: '856',
        author: '林山',
        tags: ['CSS', '前端', '教程'],
        description: '详细介绍JavaScript闭包的概念、使用场景以及常见误区，帮助开发者深入理解这一重要概念...'
    }
])

// 添加文章列表数据
const articles = ref([
    {
        id: 3,
        title: '深入理解JavaScript闭包',
        cover: articleCover,
        date: '2023-11-05',
        viewCount: '856',
        author: '林山',
        category: '前端',
        tags: ['JavaScript', '前端', '技术'],
        description: '详细介绍JavaScript闭包的概念、使用场景以及常见误区，帮助开发者深入理解这一重要概念...'
    },
    {
        id: 4,
        title: 'CSS Grid布局完全指南',
        cover: articleCover,
        date: '2023-11-01',
        viewCount: '1.5K',
        author: '林山',
        category: '客户端',
        tags: ['CSS', '前端', '教程'],
        description: '全面介绍CSS Grid布局的使用方法，包括网格容器、网格项、对齐方式等核心概念和实际应用...'
    },
    {
        id: 5,
        title: 'React Hooks使用详解',
        cover: articleCover,
        date: '2023-10-28',
        viewCount: '2.1K',
        author: '林山',
        category: 'JavaScript',
        tags: ['React', '前端', '技术'],
        description: '深入解析React Hooks的使用方法，包括useState、useEffect等常用Hooks的使用技巧和最佳实践...'
    },
    {
        id: 6,
        title: 'Node.js性能优化实战',
        cover: articleCover,
        date: '2023-10-25',
        viewCount: '1.8K',
        author: '林山',
        category: '系统架构',
        tags: ['Node.js', '后端', '性能'],
        description: '分享Node.js性能优化的实用技巧，包括内存管理、异步处理、缓存策略等方面的优化方案...'
    },
    {
        id: 7,
        title: 'TypeScript高级类型详解',
        cover: articleCover,
        date: '2023-10-20',
        viewCount: '1.3K',
        author: '林山',
        category: '系统架构',
        tags: ['TypeScript', '前端', '教程'],
        description: '详细介绍TypeScript中的高级类型概念，包括泛型、条件类型、映射类型等高级特性的使用...'
    },
    {
        id: 8,
        title: '微前端架构设计与实现',
        cover: articleCover,
        date: '2023-10-15',
        viewCount: '2.7K',
        author: '林山',
        category: '系统架构',
        tags: ['架构', '前端', '微前端'],
        description: '探讨微前端架构的设计理念和实现方案，包括主流微前端框架的对比和实际项目应用经验...'
    },
    {
        id: 9,
        title: '微前端架构设计与实现',
        cover: articleCover,
        date: '2023-10-15',
        viewCount: '2.7K',
        author: '林山',
        category: '系统架构',
        tags: ['架构', '前端', '微前端'],
        description: '探讨微前端架构的设计理念和实现方案，包括主流微前端框架的对比和实际项目应用经验...'
    },
    {
        id: 3,
        title: '深入理解JavaScript闭包',
        cover: articleCover,
        date: '2023-11-05',
        viewCount: '856',
        author: '林山',
        category: '系统架构',
        tags: ['JavaScript', '前端', '技术'],
        description: '详细介绍JavaScript闭包的概念、使用场景以及常见误区，帮助开发者深入理解这一重要概念...'
    },
    {
        id: 4,
        title: 'CSS Grid布局完全指南',
        cover: articleCover,
        date: '2023-11-01',
        viewCount: '1.5K',
        author: '林山',
        category: '系统架构',
        tags: ['CSS', '前端', '教程'],
        description: '全面介绍CSS Grid布局的使用方法，包括网格容器、网格项、对齐方式等核心概念和实际应用...'
    },
    {
        id: 5,
        title: 'React Hooks使用详解',
        cover: articleCover,
        date: '2023-10-28',
        viewCount: '2.1K',
        author: '林山',
        category: '系统架构',
        tags: ['React', '前端', '技术'],
        description: '深入解析React Hooks的使用方法，包括useState、useEffect等常用Hooks的使用技巧和最佳实践...'
    },
    {
        id: 6,
        title: 'Node.js性能优化实战',
        cover: articleCover,
        date: '2023-10-25',
        viewCount: '1.8K',
        author: '林山',
        category: '系统架构',
        tags: ['Node.js', '后端', '性能'],
        description: '分享Node.js性能优化的实用技巧，包括内存管理、异步处理、缓存策略等方面的优化方案...'
    },
    {
        id: 7,
        title: 'TypeScript高级类型详解',
        cover: articleCover,
        date: '2023-10-20',
        viewCount: '1.3K',
        author: '林山',
        category: '系统架构',
        tags: ['TypeScript', '前端', '教程'],
        description: '详细介绍TypeScript中的高级类型概念，包括泛型、条件类型、映射类型等高级特性的使用...'
    },
    {
        id: 8,
        title: '微前端架构设计与实现',
        cover: articleCover,
        date: '2023-10-15',
        viewCount: '2.7K',
        author: '林山',
        category: '系统架构',
        tags: ['架构', '前端', '微前端'],
        description: '探讨微前端架构的设计理念和实现方案，包括主流微前端框架的对比和实际项目应用经验...'
    },
    {
        id: 9,
        title: '微前端架构设计与实现',
        cover: articleCover,
        date: '2023-10-15',
        viewCount: '2.7K',
        author: '林山',
        category: '系统架构',
        tags: ['架构', '前端', '微前端'],
        description: '探讨微前端架构的设计理念和实现方案，包括主流微前端框架的对比和实际项目应用经验...'
    }
])

const currentPage = ref(1)
const pageSize = ref(9)
const total = ref(articles.value.length)

const handlePageChange = (page: number) => {
    currentPage.value = page
    // 滚动到列表顶部
    const element = document.getElementById('index-article-category')
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

// 计算当前页显示的文章
const paginatedArticles = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return articles.value.slice(start, end)
})
</script>

<style scoped>
#index-article-category {
    margin-right: 10px;
}

.article-list-item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 0 16px 0 0;
}

.pagination-container {
    margin-top: 30px;
    display: flex;
    justify-content: center;
}
</style>