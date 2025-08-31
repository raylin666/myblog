<template>
    <div class="top-banner">
        <div class="avatar">
            <a href="#"><a-avatar :size="120"><img :src="topAvatarUrl" class="avatar-img" alt="avatar" /></a-avatar></a>
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
import { ref, onMounted, reactive } from 'vue'
import { useWatch } from '@/hooks/useWatch'
import gsap from 'gsap'
import { useSettingsStore } from '@/stores/settings'

const props = defineProps({
    // 点击箭头时，滚动到指定DOM ID的位置
    aimPositionId: {
        type: String,
        default: ''
    }
})

const settingsStore = useSettingsStore()

// 网站标题
const titleText = ref('')
// 首页顶部头像
const topAvatarUrl = ref(settingsStore.settings.topAvatarUrl)
// 背景封面图
const coverUrls = reactive<string[]>([])
for (let i = 0; i < settingsStore.settings.coverUrls.length; i++) {
    coverUrls.push(new URL(settingsStore.settings.coverUrls[i], import.meta.url).href)
}

// 标题打字效果
function textEffect(text: string) {
    // 清空之前的内容
    titleText.value = ''
    let index = 0
    const intervalId = setInterval(() => {
        if (index >= text.length) {
            clearInterval(intervalId)
            return;
        }

        titleText.value += text.charAt(index)
        index++
    }, 200)
}

// 图片预加载
const preloadImages = () => {
  coverUrls.forEach(src => {
    const img = new Image()
    img.src = src
  })
}

// 获取顶部轮播图选择器
const getTopBannerSelector = () => {
    return document.querySelector('.top-banner') as HTMLElement
}

const watch = useWatch()

// 监听网站标题变化，打字效果
watch.simple(
    () => settingsStore.settings.siteTitle,
    (value) => textEffect(value),
    true
)

// 监听顶部头像变化，更新顶部头像URL
watch.simple(
    () => settingsStore.settings.topAvatarUrl,
    (value) => topAvatarUrl.value = value,
    true
)

// 监听背景图片变化，替换背景图片URL
watch.simple(
    () => settingsStore.settings.coverUrls,
    (value) => {
        // 配置的背景封面图是否有值并判断是否URL地址, 因为加载的本地图片是没有域名的(刚加载组件时会加载一次, 是本地图片的地址)
        if (value && /^https?:\/\//i.test(value[0])) {
            Object.assign(coverUrls, [])
            for (let i = 0; i < value.length; i++) {
                coverUrls[i] = new URL(value[i], import.meta.url).href
                if (i === 0) {
                    // 延迟执行确保DOM已经挂载
                    setTimeout(() => {
                        const banner = getTopBannerSelector()
                        if (banner) {
                            banner.style.backgroundImage = `url(${coverUrls[0]})`
                        }
                    }, 0)
                }
            }
        }
    },
)

onMounted(() => {
    // 预加载背景图片
    preloadImages()
    
    // 使用GSAP创建动画效果，使其无限循环上下移动
    gsap.to('.move .arrow-down', { y: '+=10', duration: 1, yoyo: true, repeat: -1 })
    // 鼠标悬停在箭头时，放大箭头
    const arrow = document.querySelector('.move .arrow-down') as HTMLElement
    if (arrow) {
        arrow.addEventListener('mouseover', () => {
            // 添加抖动效果
            gsap.to(arrow, { 
                scale: 1.5, 
                duration: 0.2,
                x: gsap.utils.random(-2, 2),
                y: gsap.utils.random(-2, 2),
                rotation: gsap.utils.random(-2, 2),
                repeat: 2,
                yoyo: true
            })
        })
        arrow.addEventListener('mouseout', () => {
            gsap.to(arrow, { 
                scale: 1, 
                duration: 0.2,
                x: 0,
                y: 0,
                rotation: 0
            })
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
    
    // 无缝背景切换效果
    let currentIndex = 0
    const banner = getTopBannerSelector()
    if (banner) {
        // 设置默认背景封面
        banner.style.backgroundImage = `url(${coverUrls[0]})`

        // 创建第二个背景层
        const backLayer = document.createElement('div')
        backLayer.className = 'background-layer'
        backLayer.style.backgroundImage = `url(${coverUrls[1]})`
        backLayer.style.opacity = '0'
        backLayer.style.position = 'absolute'
        backLayer.style.top = '0'
        backLayer.style.left = '0'
        backLayer.style.width = '100%'
        backLayer.style.height = '100%'
        backLayer.style.backgroundSize = 'cover'
        backLayer.style.backgroundPosition = 'center'
        backLayer.style.zIndex = '-1'
        backLayer.style.transition = 'opacity 1s ease-in-out'
        banner.appendChild(backLayer)
        
        const switchBackground = () => {
            currentIndex = (currentIndex + 1) % coverUrls.length
            const nextIndex = (currentIndex + 1) % coverUrls.length
            
            // 更新后层背景
            backLayer.style.backgroundImage = `url(${coverUrls[nextIndex]})`
            
            // 使用GSAP实现更平滑的交叉淡入淡出效果
            gsap.fromTo(backLayer, 
                { 
                    opacity: 0,
                    scale: 1.1,
                    filter: 'blur(2px)'
                },
                {
                    duration: 2.5,
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                    ease: "power2.inOut",
                    onComplete: () => {
                        if (banner) {
                            banner.style.backgroundImage = `url(${coverUrls[currentIndex]})`
                            gsap.set(backLayer, {
                                opacity: 0
                            })
                        }
                    }
                }
            )
        }
        
        setInterval(switchBackground, 8000)
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
    background-repeat:no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: background-image 1s ease-in-out;
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

.background-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
    transition: opacity 1s ease-in-out;
}
</style>

