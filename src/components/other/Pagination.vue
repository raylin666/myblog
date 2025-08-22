<template>
    <a-pagination 
        :v-model:current="currentPage"
        :total="total"
        :page-size="pageSize"
        :show-total="false"
        :show-jumper="false"
        @change="handlePageChange"
        class="custom-pagination"
    />
</template>

<script lang="ts" setup name="Pagination">
defineProps({
    currentPage: {
        type: Number,
        default: 1
    },
    pageSize: {
        type: Number,
        default: 10
    },
    total: {
        type: Number,
        default: 0
    },
})

const emit = defineEmits(['handlePageChange'])

// 分页改变时触发
const handlePageChange = (page: number) => {
    emit('handlePageChange', page)
}
</script>

<style scoped>
.custom-pagination :deep(.arco-pagination-item) {
    border-radius: 8px;
    margin: 0 4px;
    color: #718096;
    border: 1px solid #e2e8f0;
    background-color: #ffffff;
    transition: all 0.3s ease;
}

.custom-pagination :deep(.arco-pagination-item-active) {
    background: linear-gradient(135deg, var(--gradient-base-0) 0%, var(--gradient-base-1) 100%);
    border-color: transparent;
    color: white;
}

.custom-pagination :deep(.arco-pagination-item:hover) {
    background-color: #f7fafc;
    border-color: #cbd5e0;
    color: #2d3748;
}

.custom-pagination :deep(.arco-pagination-item-active:hover) {
    background: linear-gradient(135deg, var(--gradient-base-0) 0%, var(--gradient-base-1) 100%);
    border-color: transparent;
    color: white;
}
</style>