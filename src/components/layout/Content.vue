<template>
    <a-layout>
      <div id="content-container">
        <RouterView></RouterView>

        <br />

        <Footer />
      </div>

      <!-- 返回顶部按钮 -->
      <a-back-top target-container="#content-container" :style="{ position:'fixed', right:'70px', bottom:'50px' }" >
        <div class="rocket-container" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" ref="rocketRef">
          <div class="arrow-up">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </a-back-top>
    </a-layout>
</template>

<script setup lang="ts" name="Content" >
import { ref } from 'vue'
import { gsap } from 'gsap'
import { Footer } from '@/components'

const rocketRef = ref<HTMLElement | null>(null)
let tl: gsap.core.Timeline | null = null

const onMouseEnter = () => {
  if (rocketRef.value) {
    // 清除之前的动画
    if (tl) {
      tl.kill()
    }
    
    // 创建新的时间线动画
    tl = gsap.timeline({ repeat: -1, yoyo: true })
    
    // 新的悬停动画效果：更流畅的浮动和旋转动画
    tl.to(rocketRef.value, {
      y: -20,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(rocketRef.value, {
      rotation: 20,
      duration: 0.8,
      ease: "power2.inOut"
    }, 0)
    .to(rocketRef.value, {
      rotation: -20,
      duration: 0.8,
      ease: "power2.inOut"
    }, 0.8)
  }
}

const onMouseLeave = () => {
  if (rocketRef.value) {
    if (tl) {
      tl.kill()
      tl = null
    }
    
    gsap.to(rocketRef.value, {
      y: 0,
      rotation: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      onComplete: () => {
        gsap.set(rocketRef.value, { clearProps: "all" })
      }
    })
  }
}
</script>

<style scoped>
#content-container {
  overflow-y: auto;
}

.rocket-container {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(135deg, var(--gradient-base-0) 0%, var(--gradient-base-1) 100%);
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.rocket-container:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  transform: scale(1.1);
}

.arrow-up {
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>