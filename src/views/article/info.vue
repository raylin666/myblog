<template>
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

            <!-- 上一篇/下一篇导航 -->
            <div class="article-navigation">
                <a-button 
                    v-if="prevArticle" 
                    @click="navigateTo(prevArticle.id)"
                    class="nav-button prev"
                >
                    <span class="nav-title">← {{ prevArticle.title }}</span>
                </a-button>
                <a-button 
                    v-if="nextArticle" 
                    @click="navigateTo(nextArticle.id)"
                    class="nav-button next"
                >
                    <span class="nav-title">{{ nextArticle.title }} →</span>
                </a-button>
            </div>
        </a-col>

        <a-col :span="6" id="side-main">
            <Side />
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Side } from '@/components'
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

.article-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #eee;
}

.nav-button {
    position: relative;
    width: 45%;
    padding: 1.5rem;
    border-radius: 8px;
    background: white;
    color: var(--text-color);
    font-weight: bold;
    transition: all 0.3s ease;
    text-align: center;
    overflow: hidden;
    border: none;
    z-index: 1;
}

.nav-button::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgb(9, 255, 0), rgba(4, 255, 146, 0.578), rgb(4, 192, 255));
    transition: left 0.5s ease;
    z-index: -1;
}

.nav-button:hover::after {
    background: linear-gradient(90deg, rgb(255, 60, 0), rgba(244, 21, 218, 0.874), rgb(34, 33, 33));
    transition: left 1.3s ease;
    left: 0%;
}

.nav-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-button:hover {
    transform: translateY(-1px);
    color: white;
}

.nav-button:hover::before {
    width: 8px;
}

.nav-button.prev {
    text-align: left;
    padding-left: 2rem;
}

.nav-button.next {
    text-align: right;
    padding-right: 2rem;
    margin-right: 15px;
}

.nav-button .nav-label {
    display: block;
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 0.5rem;
}

.nav-button .nav-title {
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--primary-color);
}
</style>
