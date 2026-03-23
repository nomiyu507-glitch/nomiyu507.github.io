<template>
  <div class="member-detail-page" v-if="member">
    <router-link to="/members" class="back-link">←</router-link>

    <!-- Header: 头像 + 姓名 + Research area -->
    <div class="member-header">
      <div class="avatar avatar-square">
        <img v-if="member.avatar" :src="member.avatar" :alt="member.nameEn" />
        <div v-else class="avatar-placeholder"></div>
      </div>
      <div class="header-info">
        <h1 class="name">{{ member.nameEn }} {{ member.nameKo }} {{ member.role }}</h1>
        <div v-if="member.interests" class="research-area">
          <span class="label">Research area:</span> {{ member.interests }}
        </div>
        <a v-if="member.email" :href="`mailto:${member.email}`" class="email">{{ member.email }}</a>
      </div>
    </div>

    <!-- Personal Website -->
    <div v-if="member.website" class="website-section">
      <a :href="member.website" target="_blank" rel="noopener noreferrer" class="website-link">Personal website</a>
    </div>

    <!-- Education Background -->
    <section v-if="member.education?.length" class="section">
      <h2 class="section-title">Education Background:</h2>
      <ul class="list">
        <li v-for="(item, i) in member.education" :key="i">
          <span class="period">{{ item.period }}</span>{{ item.school }}<template v-if="item.degree"> | {{ item.degree }}</template>
        </li>
      </ul>
    </section>

    <!-- Research Work -->
    <section v-if="member.researchWork?.length" class="section">
      <h2 class="section-title">Research Work:</h2>
      <ul class="research-list">
        <li v-for="(item, i) in member.researchWork" :key="i">
          <span class="date">{{ item.date }}</span> {{ item.title }} {{ item.desc }}
        </li>
      </ul>
    </section>

    <!-- Project: 三个方块，点击链接到项目 -->
    <section v-if="(member.projects?.length || 0) > 0" class="section">
      <h2 class="section-title">Project:</h2>
      <div class="project-blocks">
        <template v-for="(proj, i) in displayProjects" :key="i">
          <a
            v-if="proj.title && proj.link"
            :href="proj.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-block"
          >
            <div class="project-img-wrap">
              <img v-if="proj.image" :src="proj.image" :alt="proj.title" class="project-img" />
              <div v-else class="project-img-placeholder"></div>
            </div>
            <span class="project-title">{{ proj.title }}</span>
          </a>
          <router-link
            v-else-if="proj.title"
            :to="{ name: 'project', params: { id: proj.id }, query: { from: member.id } }"
            class="project-block"
          >
            <div class="project-img-wrap">
              <img v-if="proj.image" :src="proj.image" :alt="proj.title" class="project-img" />
              <div v-else class="project-img-placeholder"></div>
            </div>
            <span class="project-title">{{ proj.title }}</span>
          </router-link>
          <div v-else class="project-block project-placeholder-block">
            <div class="project-img-wrap">
              <div class="project-img-placeholder"></div>
            </div>
            <span class="project-title">待补充</span>
          </div>
        </template>
      </div>
    </section>
  </div>

  <div class="member-detail-page not-found" v-else>
    <p>未找到该成员</p>
    <router-link to="/members">返回成员列表</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getMemberById } from '../data/members.js'

const route = useRoute()
const member = computed(() => getMemberById(route.params.id))

// 始终显示 3 个项目块，不足用占位
const displayProjects = computed(() => {
  const list = member.value?.projects || []
  const result = [...list]
  while (result.length < 3) {
    result.push({ id: `placeholder-${result.length}`, title: '' })
  }
  return result.slice(0, 3)
})
</script>

<style scoped>
.member-detail-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px 60px;
}

.back-link {
  display: inline-block;
  color: #4b5563;
  text-decoration: none;
  font-size: 0.9375rem;
  margin-bottom: 32px;
  transition: color 0.2s;
}

.back-link:hover {
  color: #2563eb;
}

.member-header {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-bottom: 40px;
}

.avatar {
  flex-shrink: 0;
  overflow: hidden;
  background: #e5e7eb;
}

.avatar-square {
  width: 160px;
  height: 160px;
  border-radius: 12px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: #d1d5db;
}

.header-info {
  flex: 1;
  min-width: 0;
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 12px;
  letter-spacing: 0.02em;
  line-height: 1.3;
}

.research-area {
  font-size: 0.9375rem;
  color: #374151;
  line-height: 1.5;
}

.research-area .label {
  font-weight: 600;
  color: #1f2937;
}

.header-email {
  font-size: 0.9375rem;
  color: #4b5563;
  margin-top: 6px;
}

.header-email a {
  color: #4b5563;
  text-decoration: none;
}

.header-email a:hover {
  color: #2563eb;
  text-decoration: underline;
}

.email {
  display: block;
  font-size: 0.9375rem;
  color: #4b5563;
  text-decoration: none;
  margin-top: 6px;
}

.email:hover {
  color: #2563eb;
  text-decoration: underline;
}

.website-section {
  margin-bottom: 32px;
}

.website-link {
  font-size: 0.9375rem;
  color: #1f2937;
  text-decoration: none;
}

.website-link:hover {
  color: #2563eb;
  text-decoration: underline;
}

.section {
  margin-bottom: 48px;
}

.section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 16px;
}

.list {
  margin: 0;
  padding-left: 0;
  list-style: none;
  font-size: 0.9375rem;
  color: #4b5563;
  line-height: 1.8;
}

.list .period {
  display: inline-block;
  width: 88px;
  margin-right: 16px;
  vertical-align: top;
  white-space: nowrap;
}

.research-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
  font-size: 0.9375rem;
  color: #4b5563;
  line-height: 1.8;
}

.research-list li {
  margin-bottom: 12px;
}

.research-list .date {
  font-weight: 600;
  color: #1f2937;
  margin-right: 16px;
  display: inline-block;
  width: 64px;
  vertical-align: top;
  white-space: nowrap;
}

.project-blocks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.project-block {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #4b5563;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s;
}

.project-img-wrap {
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  background: #e5e7eb;
  margin-bottom: 12px;
  transition: opacity 0.2s;
}

.project-block .project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-img-placeholder {
  width: 100%;
  height: 100%;
  background: #e5e7eb;
}

.project-block .project-title {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-block:not(.project-placeholder-block):hover {
  color: #1f2937;
}

.project-block:not(.project-placeholder-block):hover .project-img-wrap {
  opacity: 0.95;
}

.project-placeholder-block {
  cursor: default;
  color: #9ca3af;
  pointer-events: none;
}

.not-found {
  text-align: center;
  padding: 80px 24px;
}

.not-found p {
  color: #6b7280;
  margin-bottom: 16px;
}

.not-found a {
  color: #2563eb;
  text-decoration: none;
}

.not-found a:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .member-header {
    flex-direction: column;
  }

  .avatar-square {
    width: 120px;
    height: 120px;
  }

  .project-blocks {
    grid-template-columns: 1fr;
  }
}
</style>
