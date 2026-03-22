<template>
  <div class="project-detail-page">
    <router-link :to="backLink" class="back-link">← 返回</router-link>
    <h1 class="page-title">{{ project?.title || '项目' }}</h1>
    <div class="content-placeholder" v-if="project">
      <p>项目详情待补充</p>
      <p class="project-id">Project ID: {{ project.id }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const projectId = computed(() => route.params.id)
const fromMember = computed(() => route.query.from)

const backLink = computed(() =>
  fromMember.value ? { path: `/members/${fromMember.value}` } : { path: '/members' }
)

const project = computed(() => ({
  id: projectId.value,
  title: `Project ${projectId.value}`
}))
</script>

<style scoped>
.project-detail-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 24px 60px;
}

.back-link {
  display: inline-block;
  color: #4b5563;
  text-decoration: none;
  font-size: 0.9375rem;
  margin-bottom: 24px;
}

.back-link:hover {
  color: #2563eb;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 24px;
}

.content-placeholder {
  padding: 48px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  color: #6b7280;
}

.project-id {
  font-size: 0.875rem;
  margin-top: 12px;
  color: #9ca3af;
}
</style>
