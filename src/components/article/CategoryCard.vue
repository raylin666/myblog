<template>
    <div class="category-container">
        <!-- 添加左右箭头按钮 -->
        <div class="category-navigation">
            <div class="nav-arrow left-arrow" @click="scrollCategories('left')">
                <icon-left />
            </div>
            <div class="category-tags-wrapper">
                <div class="category-tags" ref="categoryTagsRef">
                    <a-tag 
                        v-for="category in categories" 
                        :key="category.name"
                        :color="category.color"
                        class="category-tag"
                        @click="filterByCategory(category.name)"
                    >
                        {{ category.name }} ({{ category.count }})
                    </a-tag>
                </div>
            </div>
            <div class="nav-arrow right-arrow" @click="scrollCategories('right')">
                <icon-right />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="CategoryCard">
import { ref } from 'vue'
import { IconLeft, IconRight } from '@arco-design/web-vue/es/icon'

// 文章分类数据
const categories = ref([
    { name: '全部', count: 15, color: 'arcoblue' },
    { name: '技术', count: 8, color: 'green' },
    { name: '设计', count: 4, color: 'purple' },
    { name: '生活', count: 2, color: 'orange' },
    { name: '教程', count: 6, color: 'cyan' },
    { name: '前端', count: 7, color: 'blue' },
    { name: '简历文档', count: 17, color: 'purple' },
    { name: '面试技巧', count: 27, color: 'green' },
    { name: '系统架构', count: 29, color: 'orange' },
    { name: '服务器', count: 12, color: 'cyan' },
])

function filterByCategory(category: string) {
    // 这里可以添加分类筛选逻辑
}

// 添加分类标签的引用
const categoryTagsRef = ref<HTMLElement | null>(null)

// 添加滚动分类标签的方法
const scrollCategories = (direction: 'left' | 'right') => {
    if (categoryTagsRef.value) {
        const scrollAmount = 200
        const scrollOptions: ScrollToOptions = {
            behavior: 'smooth'
        }
        
        if (direction === 'left') {
            scrollOptions.left = categoryTagsRef.value.scrollLeft - scrollAmount
        } else {
            scrollOptions.left = categoryTagsRef.value.scrollLeft + scrollAmount
        }
        
        categoryTagsRef.value.scrollTo(scrollOptions)
    }
}
</script>

<style scoped>
.category-container {
    background: var(--category-container-bg, linear-gradient(135deg, var(--gradient-base-0), var(--gradient-base-1)));
    border-radius: 16px;
    padding: 10px 20px;
    margin-bottom: 24px;
    backdrop-filter: blur(10px);
    overflow: hidden;
    margin-right: 10px;
    box-shadow: 0 4px 10px rgba(31, 38, 135, 0.15);
}

/* 添加分类导航容器 */
.category-navigation {
    display: flex;
    align-items: center;
    position: relative;
}

/* 添加箭头样式 */
.nav-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--nav-arrow-hover-bg, linear-gradient(135deg, var(--gradient-base-0), var(--gradient-base-1)));
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 2;
    border: 1px solid var(--nav-arrow-border, rgba(255, 255, 255, 0.8));
}

.nav-arrow:hover {
    transform: scale(1.05);
}

.nav-arrow.left-arrow {
    margin-right: 15px;
}

.nav-arrow.right-arrow {
    margin-left: 15px;
}

/* 包装器用于隐藏滚动条但保持功能 */
.category-tags-wrapper {
    flex: 1;
    overflow: hidden;
    border-radius: 12px;
    background: var(--category-tags-wrapper-bg, rgba(255, 255, 255, 0.3));
    padding: 6px 10px;
}

.category-tags {
    display: flex;
    gap: 16px;
    padding: 8px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin: 0 -8px;
    overflow-x: auto;
    scroll-behavior: smooth;
}

.category-tags::-webkit-scrollbar {
    display: none;
}

.category-tag {
    padding: 20px 30px;
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    font-size: 15px;
    white-space: nowrap;
    flex-shrink: 0;
    border: none;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
}

.category-tag::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    z-index: 1;
}

.category-tag:hover {
    z-index: 1;
    /* 添加悬停时的放大效果 */
    transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    /* 添加抖动动画 */
    animation: shake 1.2s ease-in-out;
}

.category-tag:active {
    transform: translateY(0);
    transition: all 0.2s ease;
}

/* 分类标签配色调整 */
.category-tag[color="arcoblue"] {
    background: var(--category-tag-arcoblue-bg, linear-gradient(135deg, rgba(30, 136, 229, 0.15), rgba(30, 136, 229, 0.05)));
    color: var(--category-tag-arcoblue-color, #1e88e5);
    border: 1px solid var(--category-tag-arcoblue-border, rgba(30, 136, 229, 0.2));
}

.category-tag[color="green"] {
    background: var(--category-tag-green-bg, linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(76, 175, 80, 0.05)));
    color: var(--category-tag-green-color, #4caf50);
    border: 1px solid var(--category-tag-green-border, rgba(76, 175, 80, 0.2));
}

.category-tag[color="purple"] {
    background: var(--category-tag-purple-bg, linear-gradient(135deg, rgba(156, 39, 176, 0.15), rgba(156, 39, 176, 0.05)));
    color: var(--category-tag-purple-color, #9c27b0);
    border: 1px solid var(--category-tag-purple-border, rgba(156, 39, 176, 0.2));
}

.category-tag[color="orange"] {
    background: var(--category-tag-orange-bg, linear-gradient(135deg, rgba(255, 152, 0, 0.15), rgba(255, 152, 0, 0.05)));
    color: var(--category-tag-orange-color, #ff9800);
    border: 1px solid var(--category-tag-orange-border, rgba(255, 152, 0, 0.2));
}

.category-tag[color="cyan"] {
    background: var(--category-tag-cyan-bg, linear-gradient(135deg, rgba(0, 188, 212, 0.15), rgba(0, 188, 212, 0.05)));
    color: var(--category-tag-cyan-color, #00bcd4);
    border: 1px solid var(--category-tag-cyan-border, rgba(0, 188, 212, 0.2));
}

.category-tag[color="blue"] {
    background: var(--category-tag-blue-bg, linear-gradient(135deg, rgba(33, 150, 243, 0.15), rgba(33, 150, 243, 0.05)));
    color: var(--category-tag-blue-color, #2196f3);
    border: 1px solid var(--category-tag-blue-border, rgba(33, 150, 243, 0.2));
}

/* 添加抖动动画关键帧 */
@keyframes shake {
    0%, 100% {
        transform: translateY(-3px) translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
        transform: translateY(-3px) translateX(-2px);
    }
    20%, 40%, 60%, 80% {
        transform: translateY(-3px) translateX(2px);
    }
}
</style>