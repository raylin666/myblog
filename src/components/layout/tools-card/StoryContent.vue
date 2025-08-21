<template>
    <!-- 每日小故事模块 -->
    <div class="sidebar-module">
        <div class="module-title">每日一笑</div>
        <div class="story-content">
            {{ dailyStory.content }}
        </div>
        <div class="story-footer">
            <a-button type="text" @click="getNewStory" class="change-story-btn">换一个</a-button>
        </div>
    </div>
</template>

<script setup lang="ts" name="StoryContent">
import { ref } from 'vue'

// 每日小故事数据
const dailyStory = ref({
  content: '有一天，小明对妈妈说："妈妈，我想要一只小狗。"妈妈回答："不行，养狗太麻烦了。"小明说："那我要一只小猫。"妈妈说："养猫也麻烦。"小明想了想说："那我要一条鱼吧，总不会太麻烦了吧？"妈妈说："养鱼要换水、喂食、清理鱼缸..."小明惊讶地说："妈妈，你连养条鱼都能说出这么多麻烦事，怪不得爸爸总说你烦！"'
})

// 获取新故事
const getNewStory = () => {
  const stories = [
    '有一天，小明对妈妈说："妈妈，我想要一只小狗。"妈妈回答："不行，养狗太麻烦了。"小明说："那我要一只小猫。"妈妈说："养猫也麻烦。"小明想了想说："那我要一条鱼吧，总不会太麻烦了吧？"妈妈说："养鱼要换水、喂食、清理鱼缸..."小明惊讶地说："妈妈，你连养条鱼都能说出这么多麻烦事，怪不得爸爸总说你烦！"',
    '老师："小明，你为什么上课总是睡觉？"小明："因为梦里有您在讲课呀！"',
    '医生："你的病很严重，需要静养。"病人："医生，那我还能活多久？"医生："十..."病人："十年？十个月？"医生："九、八、七、六..."',
    '小明问爸爸："爸爸，什么叫物以稀为贵？"爸爸："就是东西越少越值钱。"小明："那什么叫物以稀为贵？"爸爸："这个...这个...这个成语很珍贵，不能随便告诉别人！"'
  ]
  const randomIndex = Math.floor(Math.random() * stories.length)
  dailyStory.value.content = stories[randomIndex]
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

/* 每日小故事样式 */
.story-content {
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-primary);
    min-height: 100px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 8px;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.story-footer {
    text-align: right;
    margin-top: 15px;
}

.change-story-btn {
    color: var(--text-secondary) !important;
    font-weight: 500;
    transition: all 0.3s ease;
}

.change-story-btn:hover {
    color: var(--text-primary) !important;
    transform: scale(1.05);
}
</style>