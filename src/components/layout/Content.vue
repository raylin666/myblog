<template>
    <a-layout class="content-container">
      <RouterView></RouterView>
    </a-layout>
</template>

<script setup lang="ts" name="Content" >
import { RouterView } from 'vue-router'
</script>

<style scoped>
.content-container {
    padding: 12px;
}
</style>