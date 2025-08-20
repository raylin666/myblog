<template>
    <div class="top-banner">
        <canvas ref="particleCanvas" class="particle-canvas"></canvas>
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
const particleCanvas = ref<HTMLCanvasElement | null>(null)
let particleCtx: CanvasRenderingContext2D | null = null
let particles: Particle[] = []
let canvasWidth = window.innerWidth
let canvasHeight = window.innerHeight

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

// 粒子类定义
class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string
    life: number // 添加生命周期属性
    
    constructor(x: number, y: number, color: string) {
        this.x = x
        this.y = y
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 6 - 3
        this.speedY = Math.random() * 6 - 3
        this.color = color
        this.life = Math.random() * 100 + 50 // 粒子生命周期
    }
    
    update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.size > 0.2) this.size -= 0.05 // 更慢的尺寸减小速度
        this.life-- // 减少生命周期
    }
    
    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}

// 创建粒子效果
function createParticles(imageData: ImageData) {
    particles = []
    const data = imageData.data
    const width = imageData.width
    const height = imageData.height
    
    // 每10像素取一个点来创建粒子
    for (let y = 0; y < height; y += 10) {
        for (let x = 0; x < width; x += 10) {
            const index = (y * width + x) * 4
            const r = data[index]
            const g = data[index + 1]
            const b = data[index + 2]
            
            // 只为非黑色像素创建粒子
            if (r > 10 || g > 10 || b > 10) {
                const color = `rgb(${r}, ${g}, ${b})`
                // 将粒子位置映射到全屏范围
                const particleX = (x / width) * canvasWidth
                const particleY = (y / height) * canvasHeight
                particles.push(new Particle(particleX, particleY, color))
            }
        }
    }
}

// 粒子动画循环
function animateParticles() {
    if (!particleCanvas.value || !particleCtx) return
    
    const canvas = particleCanvas.value
    const ctx = particleCtx
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // 更新和绘制粒子
    for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw(ctx)
    }
    
    // 移除过小或生命周期结束的粒子
    particles = particles.filter(particle => particle.size > 0.2 && particle.life > 0)
    
    // 继续动画循环
    if (particles.length > 0) {
        requestAnimationFrame(animateParticles)
    }
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

// 创建爆炸粒子效果
function createExplodeParticles(fromCenter = false) {
    particles = []
    const particleCount = 500
    
    // 创建从四周向中心爆炸的粒子效果
    const centerX = canvasWidth / 2
    const centerY = canvasHeight / 2
    
    for (let i = 0; i < particleCount; i++) {
        if (fromCenter) {
            // 修改为从中心向两边扩散的效果，增加覆盖面积
            const startX = canvasWidth / 2
            const startY = canvasHeight / 2 + (Math.random() - 0.5) * canvasHeight * 0.8 // 增加垂直分布范围至整个屏幕高度
            
            const color = `hsl(${Math.random() * 360}, 100%, ${50 + Math.random() * 30}%)`
            const particle = new Particle(startX, startY, color)
            
            // 从中心向左右两边扩散的速度，增加水平速度范围
            const isLeftSide = Math.random() > 0.5
            const speed = 5 + Math.random() * 15 // 原速度范围较大
            particle.speedX = isLeftSide ? -speed : speed
            particle.speedY = (Math.random() - 0.5) * 8 // 增加垂直方向的移动范围
            // 调整粒子大小，使其更小
            particle.size = Math.random() * 6 + 2 // 从 Math.random() * 15 + 5 调整为 Math.random() * 8 + 2
            
            particles.push(particle)
        } else {
            // 随机选择一个边缘：0-左，1-右，2-上，3-下
            const edge = Math.floor(Math.random() * 4)
            let x = 0, y = 0
            
            switch(edge) {
                case 0: // 左边
                    x = 0
                    y = Math.random() * canvasHeight
                    break
                case 1: // 右边
                    x = canvasWidth
                    y = Math.random() * canvasHeight
                    break
                case 2: // 上边
                    x = Math.random() * canvasWidth
                    y = 0
                    break
                case 3: // 下边
                    x = Math.random() * canvasWidth
                    y = canvasHeight
                    break
            }
            
            const color = `hsl(${Math.random() * 360}, 100%, ${50 + Math.random() * 30}%)`
            const particle = new Particle(x, y, color)
            
            // 向中心爆炸的速度
            const angle = Math.atan2(centerY - y, centerX - x)
            const speed = 2 + Math.random() * 6
            
            particle.speedX = Math.cos(angle) * speed
            particle.speedY = Math.sin(angle) * speed
            // 调整粒子大小，使其更小（从 Math.random() * 12 + 4 调整为 Math.random() * 8 + 3）
            particle.size = Math.random() * 8 + 3 // 减小四周向中心聚合的粒子大小
            
            particles.push(particle)
        }
    }
    
    animateParticles()
}

onMounted(() => {
    // 预加载背景图片
    preloadImages()
    
    // 初始化canvas
    if (particleCanvas.value) {
        particleCtx = particleCanvas.value.getContext('2d')
        particleCanvas.value.width = canvasWidth
        particleCanvas.value.height = canvasHeight
    }
    
    // 标题打字效果
    textEffect(title)
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
    
    // 监听窗口大小变化，更新canvas尺寸
    const handleResize = () => {
        canvasWidth = window.innerWidth
        canvasHeight = window.innerHeight
        if (particleCanvas.value) {
            particleCanvas.value.width = canvasWidth
            particleCanvas.value.height = canvasHeight
        }
    }
    window.addEventListener('resize', handleResize)
    
    // 无缝背景切换效果
    let currentIndex = 0
    const banner = document.querySelector('.top-banner') as HTMLElement
    if (banner) {
        // 创建第二个背景层
        const backLayer = document.createElement('div')
        backLayer.className = 'background-layer'
        backLayer.style.backgroundImage = `url(${backgroundImages[1]})`
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
            currentIndex = (currentIndex + 1) % backgroundImages.length
            const nextIndex = (currentIndex + 1) % backgroundImages.length
            
            // 更新后层背景
            backLayer.style.backgroundImage = `url(${backgroundImages[nextIndex]})`
            
            // 先创建从四周向中心聚合的粒子效果
            createExplodeParticles(false) // false表示从四周向中心
            
            // 等待一段时间后再执行背景切换动画
            setTimeout(() => {
                // 使用GSAP实现更酷的交叉淡入淡出效果 - 调整动画时间
                gsap.fromTo(backLayer, 
                    { 
                        opacity: 0,
                        scale: 1.2,
                        filter: 'blur(5px)'
                    },
                    {
                        duration: 1.5, // 调整动画时间
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                        ease: "power2.out",
                        onComplete: () => {
                            // 背景切换完成后创建螺旋爆炸粒子效果
                            createExplodeParticles(true)
                        }
                    }
                )
                
                gsap.to(banner, {
                    duration: 1.5, // 调整动画时间
                    opacity: 1,
                    onComplete: () => {
                        if (banner) {
                            banner.style.backgroundImage = `url(${backgroundImages[currentIndex]})`
                            gsap.to(backLayer, {
                                duration: 0,
                                opacity: 0
                            })
                        }
                    },
                    ease: "power2.out"
                })
            }, 1000) // 等待1秒后开始背景切换
        }
        
        setInterval(switchBackground, 8000)
    }
    
    // 组件销毁时移除事件监听器
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
    overflow: hidden;
}

.particle-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
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