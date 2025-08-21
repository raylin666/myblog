<template>
    <div class="user-detail">
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
</template>

<script setup lang="ts" name="UserDetail">
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
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2);
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
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
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