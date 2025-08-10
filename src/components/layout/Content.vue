<template>
    <a-layout class="content">
      <RouterView></RouterView>
    </a-layout>
</template>

<script setup lang="ts" name="Content" >
import { RouterView } from 'vue-router'
</script>

<style scoped>
.content {
    padding: 12px;
}
</style>