<template>
    <ContentRow>
        <a-row class="content">
            <a-col :span="24" class="article-banner">
                <!-- 文章封面区域 -->
                <div class="article-cover">
                    <img :src="coverImage" alt="文章封面" class="cover-image" />
                </div>
            </a-col>

            <a-col :span="18" class="article">
                <!-- 文章标题和meta信息移到这里 -->
                <h1 class="article-title">{{ article.title }}</h1>
                <div class="article-meta">
                    <span class="meta-item">
                        <i class="far fa-calendar-alt"></i>
                        {{ article.date || '2023-01-01' }}
                    </span>
                    <span class="meta-item">
                        <i class="far fa-folder"></i>
                        {{ article.category || '未分类' }}
                    </span>
                    <span class="meta-item">
                        <i class="far fa-tags"></i>
                        {{ article.tags?.join(' · ') || '无标签' }}
                    </span>
                    <span class="meta-item">
                        <i class="far fa-file-word"></i>
                        {{ article.wordCount || '0' }}字
                    </span>
                    <span class="meta-item">
                        <i class="far fa-eye"></i>
                        {{ article.views || '0' }}阅读
                    </span>
                </div>
                
                <!-- 文章内容区域 -->
                <div class="article-content" v-html="article.content"></div>

            </a-col>

            <a-col :span="6" id="side-main">
                <Side />
            </a-col>
        </a-row>
    </ContentRow>
    
    <!-- 屏幕中间两侧的导航按钮 -->
    <div class="fixed-navigation">
        <a-button 
            v-if="prevArticle" 
            @click="navigateTo(prevArticle.id)"
            class="fixed-nav-button prev"
        >
            <span class="nav-arrow">←</span>
            <!-- 悬停时显示文章标题 -->
            <div class="tooltip tooltip-prev">{{ prevArticle.title }}</div>
        </a-button>
        <a-button 
            v-if="nextArticle" 
            @click="navigateTo(nextArticle.id)"
            class="fixed-nav-button next"
        >
            <span class="nav-arrow">→</span>
            <!-- 悬停时显示文章标题 -->
            <div class="tooltip tooltip-next">{{ nextArticle.title }}</div>
        </a-button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ContentRow, Side } from '@/components'
import { useNProgress } from '@/hooks/useNProgress'

// 示例数据 - 实际应从API获取
const article = ref({
    title: 'App Store Server API 实践总结',
    content: '<p>这里是富文本文章内容...</p>'.repeat(20),
    cover: '/src/assets/articleCover.png',
    date: '2023-06-15',
    category: '技术文章',
    tags: ['Vue', '前端开发', 'UI设计'],
    wordCount: 2560,
    views: 1245
})

const prevArticle = ref({
    id: '1',
    title: 'App Store Server API 实践总结'
})

const nextArticle = ref({
    id: '2',
    title: 'Redis 乐观锁解决高并发秒杀活动超卖问题'
})

const coverImage = ref(article.value.cover || '/src/assets/articleCover.png')
const router = useRouter()

const navigateTo = (id: string) => {
    router.push(`/article/${id}`)
}

// 使用封装的NProgress hooks
useNProgress()

onMounted(() => {

})
</script>

<style scoped>
.article-cover {
    position: relative;
    margin-bottom: 1rem;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* 添加过渡效果 */
}

/* 添加悬停效果 */
.article-cover:hover .cover-image {
    transform: scale(1.05);
    /* 轻微放大 */
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    /* 增强阴影 */
}

/* 独立文章标题样式 */
.article-title {
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
    margin: 1.5rem 0 2rem;
    color: var(--text-color);
    line-height: 1.3;
    letter-spacing: -0.5px;
}

.article-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    margin: 1.5rem auto 0;
    border-radius: 2px;
}

.article-meta {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 1rem 0;
    color: #666;
    font-size: 0.9rem;
    border-bottom: 1px solid #eee;
    margin-bottom: 2rem;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.meta-item i {
    color: var(--primary-color);
}

.article-content {
    line-height: 1.8;
    font-size: 1.1rem;
}

.fixed-navigation {
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    z-index: 1000;
    pointer-events: none;
}

.fixed-nav-button {
    position: relative;
    width: 70px;
    height: 70px;
    padding: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3); /* 降低透明度 */
    backdrop-filter: blur(10px);
    color: var(--text-color);
    font-weight: bold;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-align: center;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    z-index: 1;
    pointer-events: auto;
}

.fixed-nav-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color), #00c6ff);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
}

.fixed-nav-button:hover::before {
    opacity: 1;
}

.fixed-nav-button:hover {
    transform: translateY(-5px) scale(1.1);
    color: white;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.nav-arrow {
    font-size: 2.5rem;
    line-height: 70px;
    transition: transform 0.3s ease;
}

.fixed-nav-button:hover .nav-arrow {
    transform: scale(1.2);
}

/* 悬停提示样式 */
.tooltip {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 1001; /* 确保提示在最上层 */
}

.tooltip-prev {
    right: calc(100% + 15px);
}

.tooltip-next {
    left: calc(100% + 15px);
}

.fixed-nav-button:hover .tooltip {
    opacity: 1;
    transform: translateY(-50%) translateX(0); /* 统一变换 */
}

.fixed-nav-button:hover .tooltip-prev {
    transform: translateY(-50%) translateX(-10px);
}

.fixed-nav-button:hover .tooltip-next {
    transform: translateY(-50%) translateX(10px);
}

/* 添加小三角形 */
.tooltip::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
}

.tooltip-prev::after {
    left: 100%;
    border-left: 6px solid rgba(0, 0, 0, 0.85);
}

.tooltip-next::after {
    right: 100%;
    border-right: 6px solid rgba(0, 0, 0, 0.85);
}
</style>