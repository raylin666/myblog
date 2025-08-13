<template>
    <div class="side">
        
        <!-- 用户详情模块 -->
        <ToolsCardUserDetail />

        <!-- 最新评论模块 -->
        <ToolsCardCommentList />

        <!-- 标签云模块 -->
        <ToolsCardTagCloud />

        <!-- 每日小故事模块 -->
        <ToolsCardStoryContent />

    </div>
</template>

<script setup lang="ts" name="Side">
import { 
    ToolsCardCommentList,
    ToolsCardStoryContent,
    ToolsCardTagCloud,
    ToolsCardUserDetail,
 } from '@/components'
</script>

<style scoped>

</style>

