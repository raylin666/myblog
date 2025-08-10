<template>
    <div class="top-banner">
        <div class="avatar">
            <a href="#"><a-avatar :size="120"><img :src="avatarUrl" class="avatar-img" alt="avatar" /></a-avatar></a>
        </div>
        <div class="title">{{ titleText }}</div>
        <div class="move">
            <a href="#">
                <svg class="arrow-down" width="80" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts" name="TopBanner" >
import { ref, onMounted } from 'vue'
import avatarUrl from 'assets/avatar.png'
import gsap from 'gsap'

const title = 'KAKA - 梦很美 技术博客'

let titleText = ref('')

// 标题打字效果
function textEffect(text: string) {
    let index = 0
    const intervalId = setInterval(() => {
        if (index >= title.length) {
            clearInterval(intervalId)
            return;
        }

        titleText.value += text.charAt(index)
        index++
    }, 200)
}

onMounted(() => {
    // 标题打字效果
    textEffect(title)
    // 使用GSAP创建动画效果，使其无限循环上下移动
    gsap.to('.move .arrow-down', { y: '+=10', duration: 1, yoyo: true, repeat: -1 })
    // 鼠标悬停在箭头时，放大箭头
    const arrow = document.querySelector('.move .arrow-down') as HTMLElement
    if (arrow) {
        arrow.addEventListener('mouseover', () => {
            gsap.to(arrow, { scale: 1.5, duration: 0.2 })
        })
        arrow.addEventListener('mouseout', () => {
            gsap.to(arrow, { scale: 1, duration: 0.2 })
        })
    }
})
</script>

<style scoped>
.top-banner {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    background-repeat:no-repeat;
    background-position: center;
    background-size: cover;
    animation: changeTopBackground 10s infinite;
}
.top-banner .avatar {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 5vh;
}
.top-banner .avatar :deep(.arco-avatar-image) {
    border-radius: 60px;
    border: 3px solid white;
    transition: transform 0.8s ease; /* 平滑过渡效果 */
}
.top-banner .avatar :deep(.arco-avatar-image):hover {
    transform: rotate(360deg); /* 旋转360度 */
}
.top-banner .title {
    height: 25vh;
    font-size: 3rem;
    font-weight: 600;
    text-shadow: 0 1px 1px rgb(61, 60, 60);
    color: white;
    display: flex;
    justify-content: center;
}
.top-banner .move {
    height: 26.8vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top-banner .move .arrow-down {
    color: white;
}

@keyframes changeTopBackground {
    0%, 33% {
        background-image: url('assets/background/1.jpeg');
    }
    34%, 66% {
        background-image: url('assets/background/2.jpeg');
    }
    67%, 100% {
        background-image: url('assets/background/3.jpeg');
    }
}
</style>