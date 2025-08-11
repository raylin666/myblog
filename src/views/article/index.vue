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

        <a-col :span="6" class="sider">
            <div class="user-info">
                <div class="avatar-wrapper">
                    <a-avatar :size="80" class="avatar">
                        <img alt="avatar" src="assets/avatar.png" />
                    </a-avatar>
                    </div>
                    <div class="name">KAKA - 梦很美</div>
                    
                    <div class="desc">
                    热爱前端开发，专注于 VueJS 技术栈分享
                    </div>
                    <div class="stats">
                    <div class="stat-item">
                        <span class="stat-number">128</span>
                        <span class="stat-label">文章</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">1.2K</span>
                        <span class="stat-label">粉丝</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">3.5K</span>
                        <span class="stat-label">点赞</span>
                    </div>
                </div>
            </div>

            <!-- 最新评论模块 -->
            <div class="sidebar-module">
                <div class="module-title">最新评论</div>
                <div class="comment-list">
                    <div class="comment-item" v-for="comment in latestComments" :key="comment.id">
                        <div class="comment-author">{{ comment.author }}</div>
                        <div class="comment-content">{{ comment.content }}</div>
                        <div class="comment-article">《{{ comment.article }}》</div>
                    </div>
                </div>
            </div>

            <!-- 标签云模块 -->
            <div class="sidebar-module">
                <div class="module-title">标签云</div>
                <div class="tag-cloud">
                    <a-tag 
                        v-for="tag in tags" 
                        :key="tag.name" 
                        :color="tag.color" 
                        class="tag-cloud-item"
                        @click="handleTagClick(tag)"
                    >
                        {{ tag.name }} ({{ tag.count }})
                    </a-tag>
                </div>
            </div>

            <!-- 每日小故事模块 -->
            <div class="sidebar-module">
                <div class="module-title">每日一笑</div>
                <div class="story-content">
                    {{ dailyStory.content }}
                </div>
                <div class="story-footer">
                    <a-button type="text" @click="getNewStory">换一个</a-button>
                </div>
            </div>
        </a-col>
    </a-row>
</template>

<script setup lang="ts" >
import articleCover from 'assets/articleCover.png'
import { IconEye, IconUser } from '@arco-design/web-vue/es/icon'
import { ref } from 'vue'
import { useNProgress } from '@/hooks/useNProgress'

// 最新评论数据
const latestComments = ref([
  {
    id: 1,
    author: '张三',
    content: '这篇文章写得真好，学到了很多新知识！',
    article: 'Vue 3 Composition API 最佳实践'
  },
  {
    id: 2,
    author: '李四',
    content: '感谢分享，对我帮助很大',
    article: '现代Web设计趋势与实现'
  },
  {
    id: 3,
    author: '王五',
    content: '期待更多类似的文章',
    article: 'Vue 3 Composition API 最佳实践'
  }
])

// 标签云数据
const tags = ref([
  { name: 'Vue', color: 'arcoblue', count: 12 },
  { name: 'React', color: 'orangered', count: 8 },
  { name: 'JavaScript', color: 'gold', count: 15 },
  { name: 'CSS', color: 'green', count: 10 },
  { name: 'Node.js', color: 'purple', count: 7 },
  { name: '前端', color: 'cyan', count: 20 },
  { name: '后端', color: 'pinkpurple', count: 5 },
  { name: '数据库', color: 'lime', count: 6 }
])

// 每日小故事数据
const dailyStory = ref({
  content: '有一天，小明对妈妈说："妈妈，我想要一只小狗。"妈妈回答："不行，养狗太麻烦了。"小明说："那我要一只小猫。"妈妈说："养猫也麻烦。"小明想了想说："那我要一条鱼吧，总不会太麻烦了吧？"妈妈说："养鱼要换水、喂食、清理鱼缸..."小明惊讶地说："妈妈，你连养条鱼都能说出这么多麻烦事，怪不得爸爸总说你烦！"'
})

// 处理标签点击
const handleTagClick = (tag: any) => {
  console.log('点击标签:', tag.name)
}

// 获取新故事
const getNewStory = () => {
  const stories = [
    '有一天，小明对妈妈说："妈妈，我想要一只小狗。"妈妈回答："不行，养狗太麻烦了。"小明说："那我要一只小猫。"妈妈说："养猫也麻烦。"小明想了想说："那我要一条鱼吧，总不会太麻烦了吧？"妈妈说："养鱼要换水、喂食、清理鱼缸..."小明惊讶地说："妈妈，你连养条鱼都能说出这么多麻烦事，怪不得爸爸总说你烦！"',
    '老师："小明，你为什么上课总是睡觉？"小明："因为梦里有您在讲课呀！"',
    '医生："你的病很严重，需要静养。"病人："医生，那我还能活多久？"医生："十..."病人："十年？十个月？"医生："九、八、七、六..."',
    '小明问爸爸："爸爸，什么叫物以稀为贵？"爸爸："就是东西越少越值钱。"小明："那什么叫物以稀为贵？"爸爸："这个...这个...这个成语很珍贵，不能随便告诉别人！"'
  ]
  const randomIndex = Math.floor(Math.random() * stories.length)
  dailyStory.value.content = stories[randomIndex]
}

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

.content .user-info {
    border-radius: 10px;
    background: linear-gradient(130deg, rgb(126 235 250), rgb(220 135 228) 41.07%, rgb(113 200 220) 76.05%);
    /* background: linear-gradient(130deg, rgb(188 255 34), rgb(99 182 135) 41.07%, rgb(175 134 230) 76.05%); */
    padding: 30px 20px;
    color: white;
    text-align: center;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 400px;
    gap: 15px; /* 统一元素间距 */
}

.content .user-info .avatar-wrapper {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid white;
    padding: 2px;
    background-color: rgba(255,255,255,0.2);
}

.content .user-info .avatar {
    display: block;
    transition: transform 0.3s ease;
}

.content .user-info .avatar:hover {
    transform: scale(1.1);
}

.content .user-info .name {
    font-size: 18px;
    font-weight: 600;
}

.content .user-info .stats {
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    background-color: rgba(255,255,255,0.1);
    border-radius: 8px;
    margin-top: 30px;
}

.content .user-info .stat-item {
    display: flex;
    flex-direction: column;
}

.content .user-info .stat-number {
    font-size: 18px;
    font-weight: bold;
}

.content .user-info .stat-label {
    font-size: 12px;
    opacity: 0.8;
}

.content .user-info .desc {
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.9;
    margin-top: 10px;
    background: transparent;
    padding: 0;
}

/* 侧边栏模块样式 */
.sidebar-module {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 5px;
    font-size: 13px;
}

.comment-author {
    font-weight: bold;
    color: #1e88e5;
    margin-bottom: 5px;
}

.comment-content {
    color: #666;
    margin-bottom: 5px;
    line-height: 1.4;
}

.comment-article {
    color: #999;
    font-size: 12px;
    text-align: right;
}

/* 标签云样式 */
.tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tag-cloud-item {
    cursor: pointer;
    transition: all 0.3s ease;
}

.tag-cloud-item:hover {
    transform: scale(1.1);
}

/* 每日小故事样式 */
.story-content {
    font-size: 14px;
    line-height: 1.6;
    color: #666;
    min-height: 100px;
    display: flex;
    align-items: center;
}

.story-footer {
    text-align: right;
    margin-top: 10px;
}
</style>
