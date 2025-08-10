<template>
    <TopBanner />

    <br />

    <a-row class="recommend-article">
        <a-col :span="9">
          <div class="article-card">
            <a-card hoverable>
                <template #cover>
                <div>
                    <img
                    :style="{ width: '100%', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    :src="articleCover"
                    />
                </div>
                </template>
                <a-card-meta title="Card Title">
                <template #description>
                    Card content <br />
                    Card content
                </template>
                </a-card-meta>
            </a-card>
          </div>
        </a-col>
        <a-col :span="9">
          <div class="article-card">
            <a-card hoverable>
                <template #cover>
                <div>
                    <img
                    :style="{ width: '100%', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    :src="articleCover"
                    />
                </div>
                </template>
                <a-card-meta title="Card Title">
                <template #description>
                    Card content <br />
                    Card content
                </template>
                </a-card-meta>
            </a-card>
          </div>
        </a-col>

        <a-col :span="6">
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
        </a-col>
      </a-row>
</template>

<script setup lang="ts" >
import { TopBanner } from '@/components'
import articleCover from 'assets/articleCover.jpg'
</script>

<style scoped>
.recommend-article .article-card {
    width: 96%;
}
.recommend-article .article-card :deep(.arco-card) {
    background-color: white;
    border-radius: 10px;
    border: 0px;
}
.recommend-article .article-card :deep(.arco-card):hover {
    box-shadow: 0px 0px 10px #e8e8e8;
}
.recommend-article .article-card :deep(.arco-card .arco-card-cover) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.recommend-article .user-info {
    border-radius: 10px;
    background: linear-gradient(130deg, rgb(126 235 250), rgb(220 135 228) 41.07%, rgb(113 200 220) 76.05%);
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

.recommend-article {
    align-items: stretch; /* 使所有列等高 */
}

.recommend-article .user-info .avatar-wrapper {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid white;
    padding: 2px;
    background-color: rgba(255,255,255,0.2);
}

.recommend-article .user-info .avatar {
    display: block;
    transition: transform 0.3s ease;
}

.recommend-article .user-info .avatar:hover {
    transform: scale(1.1);
}

.recommend-article .user-info .name {
    font-size: 18px;
    font-weight: 600;
}

.recommend-article .user-info .stats {
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    background-color: rgba(255,255,255,0.1);
    border-radius: 8px;
    margin-top: 30px;
}

.recommend-article .user-info .stat-item {
    display: flex;
    flex-direction: column;
}

.recommend-article .user-info .stat-number {
    font-size: 18px;
    font-weight: bold;
}

.recommend-article .user-info .stat-label {
    font-size: 12px;
    opacity: 0.8;
}

.recommend-article .user-info .desc {
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.9;
    margin-top: 10px;
    background: transparent;
    padding: 0;
}
</style>