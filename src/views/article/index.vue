<template>
    <a-row class="content">
        <a-col :span="18" class="article">
            <a-row>
                    
            </a-row>

            <br />

            
        </a-col>

        <a-col :span="6" id="side-main">
            <Side />
        </a-col>
    </a-row>
</template>

<script setup lang="ts" >
import { Side } from '@/components'
import { useNProgress } from '@/hooks/useNProgress'

// 使用封装的NProgress hooks
useNProgress()
</script>

<style scoped>
</style>
