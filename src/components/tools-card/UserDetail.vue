<template>
    <div class="user-detail">
        <div class="avatar-wrapper">
            <a-avatar :size="80" class="avatar">
                <img alt="avatar" :src="userDetail.avatarUrl" />
            </a-avatar>
            </div>
            <div class="name">{{ userDetail.authorName }}</div>
            
            <div class="desc">{{ userDetail.authorDescription }}</div>
            <div class="stats">
            <div class="stat-item">
                <span class="stat-number">{{ userDetail.articleCount }}</span>
                <span class="stat-label">文章</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">{{ userDetail.articleCommentCount }}</span>
                <span class="stat-label">评论</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">{{ userDetail.articleLikeCount }}</span>
                <span class="stat-label">点赞</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="UserDetail">
import { reactive } from 'vue'
import { useWatch } from '@/hooks/useWatch'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

const userDetail = reactive({
    // 作者头像
    avatarUrl: settingsStore.settings.avatarUrl,
    // 作者名称
    authorName: settingsStore.settings.authorName,
    // 作者简介
    authorDescription: settingsStore.settings.authorDescription,
    // 文章数量
    articleCount: settingsStore.settings.articleCount,
    // 文章评论数量
    articleCommentCount: settingsStore.settings.articleCommentCount,
    // 文章点赞数量
    articleLikeCount: settingsStore.settings.articleLikeCount,
})

const watch = useWatch()

// 监听作者头像
watch.simple(
    () => settingsStore.settings.avatarUrl,
    (value) => userDetail.avatarUrl = value,
    true
)

// 监听作者名称
watch.simple(
    () => settingsStore.settings.authorName,
    (value) => userDetail.authorName = value,
    true
)

// 监听作者描述
watch.simple(
    () => settingsStore.settings.authorDescription,
    (value) => userDetail.authorDescription = value,
    true
)

// 监听文章数量
watch.simple(
    () => settingsStore.settings.articleCount,
    (value) => userDetail.articleCount = value,
    true
)

// 监听文章评论数量
watch.simple(
    () => settingsStore.settings.articleCommentCount,
    (value) => userDetail.articleCommentCount = value,
    true
)

// 监听文章点赞数量
watch.simple(
    () => settingsStore.settings.articleLikeCount,
    (value) => userDetail.articleLikeCount = value,
    true
)
</script>

<style scoped>
.user-detail {
    border-radius: 10px;
    background: linear-gradient(135deg, var(--gradient-base-0) 0%, var(--gradient-base-1) 100%);
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
    gap: 15px;
}

.user-detail .avatar-wrapper {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.4);
    padding: 2px;
    background-color: rgba(255,255,255,0.2);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
}

.user-detail .avatar {
    display: block;
    transition: transform 0.3s ease;
}

.user-detail .avatar:hover {
    transform: scale(1.1);
}

.user-detail .name {
    font-size: 20px;
    font-weight: 600;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.user-detail .stats {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    margin-top: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.user-detail .stat-item {
    display: flex;
    flex-direction: column;
}

.user-detail .stat-number {
    font-size: 20px;
    font-weight: bold;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.user-detail .stat-label {
    font-size: 14px;
    opacity: 0.95;
    margin-top: 4px;
}

.user-detail .desc {
    font-size: 15px;
    line-height: 1.6;
    opacity: 0.98;
    margin-top: 10px;
    background: transparent;
    padding: 0 10px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
}
</style>