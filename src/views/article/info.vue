<template>
    <a-row class="content">
        <a-col :span="24" class="article-banner">
            <div class="article-cover" ref="coverRef">
                <img :src="coverImage" alt="文章封面" class="cover-image" />
                <div class="rain-effect">
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                    <div class="rain"></div>
                </div>
                <!-- 文章标题显示在封面中央 -->
                <div class="cover-title">{{ article.title }}</div>
                
                <!-- 文章分类显示在封面左上角 -->
                <div class="cover-category">{{ article.category }}</div>
                
                <!-- 发布时间显示在封面右上角 -->
                <div class="publish-date">
                   <icon-calendar />
                    {{ article.date || '2023-01-01' }}
                </div>

                <!-- 将标签移到封面图内，放在顶部 -->
                <div class="cover-tags">
                    <a-tag v-for="tag in article.tags" :key="tag" :color="tagColor(tag)">{{ tag }}</a-tag>
                </div>

                <!-- 新增：文章信息显示在封面图内 -->
                <div class="cover-meta">
                    <span class="meta-item">
                        <icon-user /> {{ article.author }}
                    </span>
                    <span class="meta-item">
                        <icon-eye /> <span class="meta-number">{{ article.viewCount || '0' }}</span> 阅读量
                    </span>
                    <span class="meta-item">
                        <icon-message /> <span class="meta-number">{{ article.commentCount || 0 }}</span> 评论数
                    </span>
                    <span class="meta-item">
                        <icon-translate /> <span class="meta-number">{{ article.wordCount || '0' }}</span> 字数
                    </span>
                    
                </div>
            </div>
        </a-col>

        <ContentRow>
            <a-col :span="18" class="article">
                <div class="article-content" v-html="article.content"></div>
            </a-col>

            <a-col :span="6" id="side-main">
                <Side />
            </a-col>
        </ContentRow>
    </a-row>
    
    <!-- 屏幕中间两侧的导航按钮 -->
    <div class="fixed-navigation">
        <a-button
            v-if="prevArticle" 
            @click="navigateTo(prevArticle.id)"
            class="fixed-nav-button prev"
            @mouseenter="showPrevTitle = true"
            @mouseleave="showPrevTitle = false"
        >
            <span class="nav-text">{{ showPrevTitle ? prevArticle.title : '上一篇' }}</span>
        </a-button>
        
        <a-button
            v-if="nextArticle" 
            @click="navigateTo(nextArticle.id)"
            class="fixed-nav-button next"
            @mouseenter="showNextTitle = true"
            @mouseleave="showNextTitle = false"
        >
            <span class="nav-text">{{ showNextTitle ? nextArticle.title : '下一篇' }}</span>
        </a-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconEye, IconUser, IconMessage, IconCalendar, IconTranslate } from '@arco-design/web-vue/es/icon'
import { useRouter } from 'vue-router'
import { ContentRow, Side } from '@/components'
import { useNProgress } from '@/hooks/useNProgress'

const article = ref({
    author: '林山',
    title: '分布式系统架构设计与实践',
    content: `
    <h2>引言</h2>
    <p>随着互联网业务的快速发展，单一应用架构已经无法满足日益增长的用户需求。分布式系统架构作为一种可扩展、高可用的解决方案，逐渐成为大型互联网应用的首选架构模式。</p>
    
    <h2>什么是分布式系统</h2>
    <p>分布式系统是由一组独立的计算机组成的系统，这些计算机通过网络互联，对外表现为一个统一的整体。其主要特征包括：</p>
    <ul>
        <li><strong>透明性</strong>：用户无需知道资源的物理位置</li>
        <li><strong>扩展性</strong>：可以通过增加节点来提升系统性能</li>
        <li><strong>容错性</strong>：单个节点故障不会导致整个系统瘫痪</li>
        <li><strong>并发性</strong>：多个节点可以同时处理请求</li>
    </ul>
    
    <h2>分布式系统的核心挑战</h2>
    <h3>1. 数据一致性</h3>
    <p>在分布式环境中，如何保证多个节点间数据的一致性是一个核心问题。常见的解决方案包括：</p>
    <ul>
        <li>两阶段提交（2PC）</li>
        <li>三阶段提交（3PC）</li>
        <li>Paxos算法</li>
        <li>Raft算法</li>
    </ul>
    
    <h3>2. 服务拆分与治理</h3>
    <p>微服务架构是当前主流的分布式系统设计模式，其优势在于：</p>
    <ul>
        <li>服务独立部署和升级</li>
        <li>技术栈多样化</li>
        <li>团队自治</li>
        <li>故障隔离</li>
    </ul>
    
    <h3>3. 分布式事务</h3>
    <p>分布式事务的实现方案主要包括：</p>
    <ul>
        <li><strong>XA协议</strong>：基于两阶段提交的分布式事务解决方案</li>
        <li><strong>TCC模式</strong>：Try-Confirm-Cancel的补偿型事务</li>
        <li><strong>Saga模式</strong>：长事务解决方案</li>
        <li><strong>本地消息表</strong>：通过消息队列实现最终一致性</li>
    </ul>
    
    <h2>分布式系统设计模式</h2>
    <h3>1. 负载均衡</h3>
    <p>负载均衡是分布式系统中的基础组件，常见的负载均衡策略包括：</p>
    <ul>
        <li>轮询（Round Robin）</li>
        <li>加权轮询（Weighted Round Robin）</li>
        <li>最少连接（Least Connections）</li>
        <li>IP哈希（IP Hash）</li>
    </ul>
    
    <h3>2. 服务注册与发现</h3>
    <p>服务注册与发现机制是微服务架构的核心组件，常用的解决方案有：</p>
    <ul>
        <li>Eureka（Netflix开源）</li>
        <li>Consul（HashiCorp）</li>
        <li>Nacos（阿里巴巴）</li>
        <li>etcd（CoreOS）</li>
    </ul>
    
    <h3>3. 熔断与降级</h3>
    <p>为提高系统的稳定性和容错能力，需要实现熔断和降级机制：</p>
    <ul>
        <li><strong>熔断器模式</strong>：当服务调用失败率达到阈值时，暂时切断调用</li>
        <li><strong>降级策略</strong>：在系统压力过大时，关闭非核心功能</li>
    </ul>
    
    <h2>分布式缓存策略</h2>
    <p>缓存是提升系统性能的重要手段，在分布式环境下需要考虑：</p>
    <ul>
        <li>缓存一致性</li>
        <li>缓存穿透</li>
        <li>缓存雪崩</li>
        <li>缓存击穿</li>
    </ul>
    
    <h2>分布式锁实现</h2>
    <p>在分布式环境中，需要通过分布式锁来保证数据一致性：</p>
    <ul>
        <li>基于数据库实现</li>
        <li>基于Redis实现</li>
        <li>基于Zookeeper实现</li>
    </ul>
    
    <h2>监控与追踪</h2>
    <p>分布式系统的可观测性至关重要：</p>
    <ul>
        <li><strong>日志收集</strong>：集中式日志管理（ELK）</li>
        <li><strong>指标监控</strong>：Prometheus + Grafana</li>
        <li><strong>链路追踪</strong>：Zipkin、SkyWalking</li>
    </ul>
    
    <h2>总结</h2>
    <p>分布式系统架构虽然带来了复杂性，但其在可扩展性、高可用性方面的优势使其成为构建大型互联网应用的必然选择。在实际应用中，需要根据业务特点选择合适的架构模式和技术方案。</p>
    `,
    cover: '/src/assets/articleCover.png',
    date: '2023-07-20',
    category: '架构设计',
    tags: ['前端', 'JavaScript', '架构'],
    commentCount: 12,
    wordCount: 3200,
    viewCount: 2560,
})

const prevArticle = ref({
    id: '1',
    title: 'App Store Server API 实践总结'
})

const nextArticle = ref({
    id: '2',
    title: 'Redis 乐观锁解决高并发秒杀活动超卖问题'
})

const coverImage = ref(article.value.cover || '/src/assets/articleCover.png')
const router = useRouter()

const navigateTo = (id: string) => {
    router.push(`/article/${id}`)
}

const showPrevTitle = ref(false)
const showNextTitle = ref(false)

const coverRef = ref<HTMLElement | null>(null)

// 使用封装的NProgress hooks
useNProgress()

function tagColor(tag: string) {
    switch (tag) {
        case 'Vue':
            return 'blue'
        case '前端':
            return 'green'
        case '教程':
            return 'orange'
        case 'UI/UX':
            return 'purple'
        case '设计':
            return 'red'
        case 'CSS':
            return 'cyan'
        case 'JavaScript':
            return 'arcoblue'
        case 'React':
            return 'green'
        case '性能':
            return 'purple'
        case 'TypeScript':
            return 'cyan'
        case '架构':
            return 'blue'
        case '微前端':
            return 'arcoblue'
        default:
            return 'orange'
    }
}
</script>

<style scoped>
.cover-tags {
    position: absolute;
    top: 26px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 60%;
    cursor: pointer;
}

.cover-tags :deep(.arco-tag) {
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 14px 20px;
    font-size: 13px;
    font-weight: 500;
    border: none;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}

.cover-tags :deep(.arco-tag):hover {
    transform: translateY(-2px);
}

.article-cover {
    position: relative;
    height: 460px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0.9; /* 添加透明效果 */
}

.article-cover:hover .cover-image {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    opacity: 1; /* 悬停时恢复不透明 */
}

.rain-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 1;
}

.rain {
    position: absolute;
    top: -20px;
    width: 2px;
    height: 50px;
    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.8));
    border-radius: 0 0 2px 2px;
    animation: rainFall var(--duration, 3s) linear infinite var(--delay, 0s);
    z-index: 1;
}

/* 为每个雨滴设置不同的位置、延迟和持续时间 */
.rain:nth-child(1) { --delay: 0s; --duration: 1.2s; left: 5%; }
.rain:nth-child(2) { --delay: 0.3s; --duration: 1.7s; left: 15%; }
.rain:nth-child(3) { --delay: 0.6s; --duration: 1.4s; left: 25%; }
.rain:nth-child(4) { --delay: 0.1s; --duration: 1.6s; left: 35%; }
.rain:nth-child(5) { --delay: 0.9s; --duration: 1.3s; left: 45%; }
.rain:nth-child(6) { --delay: 0.4s; --duration: 1.8s; left: 55%; }
.rain:nth-child(7) { --delay: 0.7s; --duration: 1.5s; left: 65%; }
.rain:nth-child(8) { --delay: 0.2s; --duration: 1.9s; left: 75%; }
.rain:nth-child(9) { --delay: 0.5s; --duration: 1.1s; left: 85%; }
.rain:nth-child(10) { --delay: 0.8s; --duration: 1.6s; left: 95%; }
.rain:nth-child(11) { --delay: 0.1s; --duration: 1.3s; left: 10%; }
.rain:nth-child(12) { --delay: 0.6s; --duration: 1.7s; left: 20%; }
.rain:nth-child(13) { --delay: 0.9s; --duration: 1.2s; left: 30%; }
.rain:nth-child(14) { --delay: 0.3s; --duration: 1.8s; left: 40%; }
.rain:nth-child(15) { --delay: 0.7s; --duration: 1.4s; left: 50%; }
.rain:nth-child(16) { --delay: 0.2s; --duration: 1.6s; left: 60%; }
.rain:nth-child(17) { --delay: 0.5s; --duration: 1.9s; left: 70%; }
.rain:nth-child(18) { --delay: 0.8s; --duration: 1.1s; left: 80%; }
.rain:nth-child(19) { --delay: 0.4s; --duration: 1.5s; left: 90%; }
.rain:nth-child(20) { --delay: 0s; --duration: 1.7s; left: 50%; top: -40px; height: 30px; }

@keyframes rainFall {
    0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
    }
    10% {
        opacity: 0.8;
    }
    90% {
        opacity: 0.6;
    }
    100% {
        transform: translateY(420px) translateX(5px);
        opacity: 0;
    }
}

.cover-title {
    position: absolute;
    top: 40%; /* 调整标题位置，为meta信息留出空间 */
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
    z-index: 2;
    width: 80%;
    line-height: 1.3;
    transition: all 1s ease;
    cursor: pointer;
}

.article-cover:hover .cover-title {
    transform: translate(-50%, -50%) scale(1.05);
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.9), 0 2px 10px rgba(0, 0, 0, 0.9);
}

.cover-category {
    position: absolute;
    top: 20px;
    left: -40px;
    width: 160px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: linear-gradient(135deg, var(--gradient-base-0) 0%, var(--gradient-base-1) 100%);
    color: white;
    font-weight: bold;
    font-size: 1rem;
    z-index: 3;
    transform: rotate(-45deg);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.publish-date {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.9rem;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 5px;
}

.cover-meta {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 0.5rem 1rem;
    color: white;
    font-size: 0.9rem;
    z-index: 2;
    background: rgba(0, 0, 0, 0.2); /* 半透明背景 */
    border-radius: 20px;
    backdrop-filter: blur(5px); /* 毛玻璃效果 */
    width: 80%;
    flex-wrap: wrap;
    justify-content: center;
}

.cover-meta .meta-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    white-space: nowrap;
}

.cover-meta .meta-item .meta-number {
    color: var(--primary-color);
    font-weight: 800;
}

.article-meta {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 1rem 0;
    color: #666;
    font-size: 0.9rem;
    border-bottom: 1px solid #eee;
    margin-bottom: 2rem;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.meta-item i {
    color: var(--primary-color);
}

.article-content {
    line-height: 1.8;
    font-size: 1.1rem;
}

.article-content h1,
.article-content h2,
.article-content h3 {
    margin: 1.5rem 0 1rem;
    color: #333;
}

.article-content p {
    margin-bottom: 1rem;
    text-align: justify;
}

.article-content ul {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
}

.article-content li {
    margin-bottom: 0.5rem;
}

.fixed-navigation {
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    z-index: 1000;
    pointer-events: none;
}

.fixed-nav-button {
    position: relative;
    min-width: 100px;
    height: 40px;
    padding: 0 15px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    color: var(--text-color);
    font-weight: bold;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-align: center;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    z-index: 1001; /* 提高z-index确保按钮在上层 */
    pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.fixed-nav-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #232324;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
}

.fixed-nav-button:hover::before {
    opacity: 1;
}

.fixed-nav-button:hover {
    transform: translateY(-3px);
    color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.nav-text {
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80px;
    transition: all 1.2s ease-in-out;
}

.fixed-nav-button:hover .nav-text {
    max-width: 500px;
}
</style>

