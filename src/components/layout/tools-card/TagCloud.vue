<template>
    <!-- 标签云模块 -->
    <div class="sidebar-module">
        <div class="module-title">标签云</div>
        <div class="tag-cloud">
            <a-tag 
                v-for="tag in tags" 
                :key="tag.name" 
                :color="tag.color" 
                class="tag-cloud-item"
                @click="handleTagClick(tag)"
            >
                {{ tag.name }} ({{ tag.count }})
            </a-tag>
        </div>
    </div>
</template>

<script setup lang="ts" name="TagCloud">
import { ref } from 'vue'

// 标签云数据
const tags = ref([
  { name: 'Vue', color: 'arcoblue', count: 12 },
  { name: 'React', color: 'orangered', count: 8 },
  { name: 'JavaScript', color: 'gold', count: 15 },
  { name: 'CSS', color: 'green', count: 10 },
  { name: 'Node.js', color: 'purple', count: 7 },
  { name: '前端', color: 'cyan', count: 20 },
  { name: '后端', color: 'pinkpurple', count: 5 },
  { name: '数据库', color: 'lime', count: 6 },
  { name: 'PHP', color: 'purple', count: 6 },
  { name: 'Golang', color: 'green', count: 6 },
  { name: 'Python', color: 'orangered', count: 6 },
  { name: '人工智能', color: 'arcoblue', count: 6 },
])

// 处理标签点击
const handleTagClick = (tag: any) => {
  console.log('点击标签:', tag.name)
}
</script>

<style scoped>
/* 侧边栏模块样式 */
.sidebar-module {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
}

.module-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

/* 标签云样式 */
.tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tag-cloud-item {
    cursor: pointer;
    transition: all 0.3s ease;
}

.tag-cloud-item:hover {
    transform: scale(1.1);
}
</style>