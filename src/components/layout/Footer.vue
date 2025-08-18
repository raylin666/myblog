<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-links">
        <a href="/about">关于我们</a>
        <a href="/contact">联系我们</a>
        <a href="/privacy">隐私政策</a>
        <a href="/terms">服务条款</a>
      </div>
      <div class="footer-copyright">
        © 2023 林山的博客 - 保留所有权利
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts" name="Footer">
// 可以在这里添加页脚相关的逻辑
</script>

<style scoped>
.footer-container {
  background-color: var(--bg-color-primary);
  padding: 20px 0;
  margin-top: auto;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-links {
  margin: 15px 0;
}

.footer-links a {
  margin: 0 15px;
  color: var(--text-color-primary);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--primary-color-hover);
}

.footer-copyright {
  color: #999;
  font-size: 14px;
  line-height: 40px;
}
</style>