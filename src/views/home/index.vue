<template>
    <TopBanner />

    <br />

    <a-row class="recommend-article">
        <a-col :span="6">
          <div>

          </div>
        </a-col>
        <a-col :span="9">
          <div class="article-card">
            <a-card hoverable>
                <template #cover>
                <div
                    :style="{
                    height: '204px',
                    overflow: 'hidden',
                    }"
                >
                    <img
                    :style="{ width: '100%', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                    />
                </div>
                </template>
                <a-card-meta title="Card Title">
                <template #description>
                    Card content <br />
                    Card content
                </template>
                </a-card-meta>
            </a-card>
          </div>
        </a-col>
        <a-col :span="9">
          <div class="article-card">
            <a-card hoverable>
                <template #cover>
                <div
                    :style="{
                    height: '204px',
                    overflow: 'hidden',
                    }"
                >
                    <img
                    :style="{ width: '100%', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                    />
                </div>
                </template>
                <a-card-meta title="Card Title">
                <template #description>
                    Card content <br />
                    Card content
                </template>
                </a-card-meta>
            </a-card>
          </div>
        </a-col>
      </a-row>
</template>

<script setup lang="ts" >
import { TopBanner } from '@/components'
</script>

<style scoped>
.recommend-article .article-card {
    width: 98%;
    float: right;
}
</style>