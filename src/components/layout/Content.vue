<template>
    <a-layout>
      <div id="content-container">
        <RouterView></RouterView>
      </div>

      <br />

      <Footer />

      <!-- 返回顶部按钮 -->
      <a-back-top target-container="#content-container" :style="{ position:'fixed', right:'50px', bottom:'50px' }" >
        <a-button>UP</a-button>
      </a-back-top>
    </a-layout>
</template>

<script setup lang="ts" name="Content" >
import { Footer } from '@/components'
</script>

<style scoped>
#content-container {
  height: 100%;
  overflow: auto;
}
</style>