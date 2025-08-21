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
  { name: 'Vue', color: '#42b883', count: 12 },
  { name: 'React', color: '#61dafb', count: 8 },
  { name: 'JavaScript', color: '#f7df1e', count: 15 },
  { name: 'CSS', color: '#264de4', count: 10 },
  { name: 'Node.js', color: '#83cd29', count: 7 },
  { name: '前端', color: '#ff6b6b', count: 20 },
  { name: '后端', color: '#9b59b6', count: 5 },
  { name: '数据库', color: '#3498db', count: 6 },
  { name: 'PHP', color: '#8892bf', count: 6 },
  { name: 'Golang', color: '#00acd7', count: 6 },
  { name: 'Python', color: '#3572a5', count: 6 },
  { name: '人工智能', color: '#ff9800', count: 6 },
])

// 处理标签点击
const handleTagClick = (tag: any) => {
  console.log('点击标签:', tag.name)
}
</script>

<style scoped>
/* 侧边栏模块样式 */
.sidebar-module {
    background: linear-gradient(135deg, var(--gradient-light-0) 0%, var(--gradient-light-1) 100%);
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    color: var(--text-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.module-title {
    font-size: 18px;
    font-weight: bold;
    color: var(--text-primary);
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding: 4px 12px;
    font-weight: 500;
}

.tag-cloud-item:hover {
    transform: scale(1.05);
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.1);
}
</style>