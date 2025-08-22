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
    background: var(--bg-color-secondary);
    border-radius: 12px;
    padding: 8px 20px;
    margin-bottom: 20px;
    backdrop-filter: blur(5px);
    overflow: hidden;
    margin-right: 10px;
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
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 2;
}

.nav-arrow:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.nav-arrow.left-arrow {
    margin-right: 10px;
}

.nav-arrow.right-arrow {
    margin-left: 10px;
}

/* 包装器用于隐藏滚动条但保持功能 */
.category-tags-wrapper {
    flex: 1;
    overflow: hidden;
}

.category-tags {
    display: flex;
    gap: 12px;
    padding: 8px 4px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin: 0 -4px;
    overflow-x: auto;
    scroll-behavior: smooth;
}

.category-tags::-webkit-scrollbar {
    display: none;
}

.category-tag {
    padding: 18px 18px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
    flex-shrink: 0;
    border: none;
}
.category-tag:hover {
    transform: scale(1.03);
    z-index: 1;
    animation: shake 0.5s ease infinite;
}

@keyframes shake {
    0%, 100% { transform: translateX(0) scale(1.03); }
    25% { transform: translateX(-2px) scale(1.03); }
    50% { transform: translateX(2px) scale(1.03); }
    75% { transform: translateX(-2px) scale(1.03); }
}

/* 分类标签配色调整 */
.category-tag[color="arcoblue"] {
    background-color: rgba(30, 136, 229, 0.1);
    color: #1e88e5;
}

.category-tag[color="green"] {
    background-color: rgba(76, 175, 80, 0.1);
    color: #4caf50;
}

.category-tag[color="purple"] {
    background-color: rgba(156, 39, 176, 0.1);
    color: #9c27b0;
}

.category-tag[color="orange"] {
    background-color: rgba(255, 152, 0, 0.1);
    color: #ff9800;
}

.category-tag[color="cyan"] {
    background-color: rgba(0, 188, 212, 0.1);
    color: #00bcd4;
}

.category-tag[color="blue"] {
    background-color: rgba(33, 150, 243, 0.1);
    color: #2196f3;
}
</style>