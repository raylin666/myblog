<template>
    <a-layout>
      <div class="content-container">
        <RouterView></RouterView>
      </div>

      <br />

      <Footer />
    </a-layout>
</template>

<script setup lang="ts" name="Content" >
import { Footer } from '@/components'
</script>

<style scoped>
.content-container {
    padding: 12px;
}
</style>