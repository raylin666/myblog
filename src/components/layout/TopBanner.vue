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
import avatarUrl from 'assets/tavatar.png'
import backgroundImage1 from 'assets/background/1.jpeg'
import backgroundImage2 from 'assets/background/2.jpeg'
import backgroundImage3 from 'assets/background/3.jpeg'
import gsap from 'gsap'

const props = defineProps({
    // 点击箭头时，滚动到指定DOM ID的位置
    aimPositionId: {
        type: String,
        default: ''
    }
})

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

// 预加载背景图片
const backgroundImages = [
  new URL(backgroundImage1, import.meta.url).href,
  new URL(backgroundImage2, import.meta.url).href,
  new URL(backgroundImage3, import.meta.url).href
]

const preloadImages = () => {
  backgroundImages.forEach(src => {
    const img = new Image()
    img.src = src
  })
}

onMounted(() => {
    // 预加载背景图片
    preloadImages()
    
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
    
    // 点击箭头时平滑滚动到DOM ID指定位置
    const moveElement = document.querySelector('.move') as HTMLElement
    if (moveElement && props.aimPositionId) {
        moveElement.addEventListener('click', () => {
            const aimPosition = document.getElementById(props.aimPositionId)
            if (aimPosition) {
                aimPosition.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                })
            }
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
    /* border-radius: 10px; */
    background-image: url('assets/background/1.jpeg');
    background-repeat:no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
}

.top-banner::before,
.top-banner::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0;
}

.top-banner::before {
    background-image: url('assets/background/2.jpeg');
}

.top-banner::after {
    background-image: url('assets/background/3.jpeg');
}

.top-banner .avatar {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 5vh;
    position: relative;
    z-index: 1;
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
    position: relative;
    z-index: 1;
}

.top-banner .move {
    height: 26.8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
}

.top-banner .move .arrow-down {
    color: white;
}

/* 新增背景切换动画：使用缩放和旋转效果 */
@keyframes bgTransform {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  25% {
    transform: scale(1.05) rotate(2deg);
  }
  33% {
    opacity: 1;
  }
  34% {
    opacity: 0;
    transform: scale(1.1) rotate(3deg);
  }
  35% {
    background-image: url('assets/background/2.jpeg');
    opacity: 0;
    transform: scale(1.1) rotate(3deg);
  }
  36% {
    opacity: 1;
  }
  58% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  66% {
    opacity: 1;
  }
  67% {
    opacity: 0;
    transform: scale(1.05) rotate(-2deg);
  }
  68% {
    background-image: url('assets/background/3.jpeg');
    opacity: 0;
    transform: scale(1.05) rotate(-2deg);
  }
  69% {
    opacity: 1;
  }
  92% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.top-banner {
  animation: bgTransform 45s infinite; /* 从15s调整为45s，使动画更慢 */
}
</style>