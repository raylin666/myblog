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

.user-detail .avatar-wrapper {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid white;
    padding: 2px;
    background-color: rgba(255,255,255,0.2);
}

.user-detail .avatar {
    display: block;
    transition: transform 0.3s ease;
}

.user-detail .avatar:hover {
    transform: scale(1.1);
}

.user-detail .name {
    font-size: 18px;
    font-weight: 600;
}

.user-detail .stats {
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    background-color: rgba(255,255,255,0.1);
    border-radius: 8px;
    margin-top: 30px;
}

.user-detail .stat-item {
    display: flex;
    flex-direction: column;
}

.user-detail .stat-number {
    font-size: 18px;
    font-weight: bold;
}

.user-detail .stat-label {
    font-size: 12px;
    opacity: 0.8;
}

.user-detail .desc {
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.9;
    margin-top: 10px;
    background: transparent;
    padding: 0;
}
</style>