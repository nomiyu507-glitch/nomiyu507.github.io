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
          <span class="label">{{ t('memberDetail.researchArea') }}</span> {{ member.interests }}
        </div>
        <a v-if="member.email" :href="`mailto:${member.email}`" class="email">{{ member.email }}</a>
        <button type="button" class="schedule-btn" @click="scheduleOpen = true">
          {{ t('memberDetail.scheduleBtn') }}
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="scheduleOpen"
        class="schedule-modal-backdrop"
        role="presentation"
        @click.self="scheduleOpen = false"
      >
        <div
          class="schedule-modal"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="'schedule-title'"
        >
          <div class="schedule-modal-header">
            <h2 id="schedule-title" class="schedule-modal-title">{{ t('memberDetail.scheduleModalTitle') }}</h2>
            <button type="button" class="schedule-modal-close" @click="scheduleOpen = false" :aria-label="t('memberDetail.close')">
              ×
            </button>
          </div>
          <div class="schedule-week">
            <div
              v-for="col in weekColumns"
              :key="col.key"
              class="schedule-day-col"
              :class="{ 'is-today': col.isToday }"
            >
              <div class="schedule-day-label">{{ t(`memberDetail.weekDays.${col.key}`) }}</div>
              <div class="schedule-day-date">{{ col.dateStr }}</div>
              <div class="schedule-day-slot">{{ scheduleCell(member, col.key) }}</div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Personal Website -->
    <div v-if="member.website" class="website-section">
      <a :href="member.website" target="_blank" rel="noopener noreferrer" class="website-link">{{ t('memberDetail.personalWebsite') }}</a>
    </div>

    <!-- Education Background -->
    <section v-if="member.education?.length" class="section">
      <h2 class="section-title">{{ t('memberDetail.education') }}</h2>
      <ul class="list">
        <li v-for="(item, i) in member.education" :key="i">
          <span class="period">{{ item.period }}</span>{{ item.school }}<template v-if="item.degree"> | {{ item.degree }}</template>
        </li>
      </ul>
    </section>

    <!-- Research Work -->
    <section v-if="member.researchWork?.length" class="section">
      <h2 class="section-title">{{ t('memberDetail.researchWork') }}</h2>
      <ul class="research-list">
        <li v-for="(item, i) in member.researchWork" :key="i">
          <span class="date">{{ item.date }}</span> {{ item.title }} {{ item.desc }}
        </li>
      </ul>
    </section>

    <!-- Project: 三个方块，点击链接到项目 -->
    <section v-if="(member.projects?.length || 0) > 0" class="section">
      <h2 class="section-title">{{ t('memberDetail.project') }}</h2>
      <div class="project-blocks">
        <template v-for="(proj, i) in displayProjects" :key="i">
          <div
            v-if="proj.title && embedUrl(proj)"
            class="project-block project-block-embed"
          >
            <div class="project-video-wrap">
              <iframe
                :src="embedUrl(proj)"
                :title="proj.title"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>
            <span class="project-title">{{ proj.title }}</span>
          </div>
          <a
            v-else-if="proj.title && proj.link"
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
            <span class="project-title">{{ t('memberDetail.tbd') }}</span>
          </div>
        </template>
      </div>
    </section>
  </div>

  <div class="member-detail-page not-found" v-else>
    <p>{{ t('memberDetail.notFound') }}</p>
    <router-link to="/members">{{ t('memberDetail.backToList') }}</router-link>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getMemberById } from '../data/members.js'
import { getYouTubeEmbedUrl } from '../utils/youtube.js'

const scheduleKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const route = useRoute()
const { t, locale } = useI18n()
const member = computed(() => getMemberById(route.params.id))

/** 本周一 00:00（周一至周日为一周） */
function startOfWeekMonday(d) {
  const x = new Date(d)
  const day = x.getDay()
  const diff = day === 0 ? -6 : 1 - day
  x.setDate(x.getDate() + diff)
  x.setHours(0, 0, 0, 0)
  return x
}

const weekColumns = computed(() => {
  const monday = startOfWeekMonday(new Date())
  const loc = locale.value === 'ko' ? 'ko-KR' : 'en-US'
  const fmt = new Intl.DateTimeFormat(loc, { month: 'numeric', day: 'numeric' })
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return scheduleKeys.map((key, i) => {
    const dt = new Date(monday)
    dt.setDate(monday.getDate() + i)
    const d0 = new Date(dt)
    d0.setHours(0, 0, 0, 0)
    return {
      key,
      dateStr: fmt.format(dt),
      isToday: d0.getTime() === today.getTime()
    }
  })
})
const scheduleOpen = ref(false)

let escHandler = null
watch(scheduleOpen, open => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    escHandler = e => {
      if (e.key === 'Escape') scheduleOpen.value = false
    }
    window.addEventListener('keydown', escHandler)
  } else if (escHandler) {
    window.removeEventListener('keydown', escHandler)
    escHandler = null
  }
})

function scheduleCell(m, key) {
  const v = m?.schedule?.[key]
  if (v == null || String(v).trim() === '') return t('memberDetail.scheduleEmpty')
  return String(v).trim()
}

function embedUrl(proj) {
  return getYouTubeEmbedUrl(proj?.link || '')
}

// 仅展示数据中的项目，不补空位
const displayProjects = computed(() => member.value?.projects || [])
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

.schedule-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1f2937;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.schedule-btn:hover {
  background: #e5e7eb;
  border-color: #d1d5db;
}

.schedule-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(15, 23, 42, 0.45);
}

.schedule-modal {
  width: 100%;
  max-width: min(960px, calc(100vw - 32px));
  max-height: min(90vh, 640px);
  overflow: auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.schedule-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 18px;
  border-bottom: 1px solid #e5e7eb;
}

.schedule-modal-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #1f2937;
}

.schedule-modal-close {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  padding: 0;
  font-size: 1.5rem;
  line-height: 1;
  color: #6b7280;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.schedule-modal-close:hover {
  background: #f3f4f6;
  color: #1f2937;
}

.schedule-week {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 8px;
  padding: 16px 14px 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.schedule-day-col {
  flex: 1 1 0;
  min-width: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 12px 8px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #fafafa;
  transition: border-color 0.2s, background 0.2s;
}

.schedule-day-col.is-today {
  border-color: #2563eb;
  background: #eff6ff;
}

.schedule-day-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #6b7280;
  letter-spacing: 0.04em;
}

.schedule-day-date {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
  margin: 6px 0 10px;
  white-space: nowrap;
}

.schedule-day-slot {
  font-size: 0.75rem;
  color: #4b5563;
  line-height: 1.4;
  word-break: break-word;
  width: 100%;
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

.project-video-wrap {
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #0f0f0f;
  margin-bottom: 12px;
}

.project-video-wrap iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.project-block-embed .project-title {
  margin-top: 0;
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
