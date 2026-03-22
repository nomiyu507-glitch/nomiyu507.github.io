<template>
  <div
    class="member-card"
    :class="{ wide }"
    :style="memberId ? { cursor: 'pointer' } : {}"
    @click="memberId && router.push({ name: 'member', params: { id: memberId } })"
  >
    <div class="avatar">
      <img v-if="avatar" :src="avatar" :alt="nameEn" />
      <div v-else class="avatar-placeholder"></div>
    </div>
    <div class="info">
      <div class="name-en">{{ nameEn }}</div>
      <div v-if="nameKo" class="name-ko">{{ nameKo }}</div>
      <a
        v-if="email"
        :href="`mailto:${email}`"
        class="email"
        @click.stop
      >{{ email }}</a>
      <div v-if="interests" class="interests">{{ interests }}</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  nameEn: { type: String, required: true },
  nameKo: { type: String, default: '' },
  email: { type: String, default: '' },
  interests: { type: String, default: '' },
  avatar: { type: String, default: '' },
  wide: { type: Boolean, default: false },
  memberId: { type: String, default: '' }
})

const router = useRouter()
</script>

<style scoped>
.member-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  transition: box-shadow 0.2s;
}

.member-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.member-card.wide {
  max-width: 100%;
}

.avatar {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  background: #e5e7eb;
}

.member-card.wide .avatar {
  width: 96px;
  height: 96px;
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

.info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.name-en {
  font-weight: 600;
  font-size: 0.95rem;
  color: #1f2937;
  letter-spacing: 0.05em;
}

.name-ko {
  font-size: 0.875rem;
  color: #6b7280;
}

.email {
  font-size: 0.8125rem;
  color: #4b5563;
  text-decoration: none;
}

.email:hover {
  color: #2563eb;
  text-decoration: underline;
}

.interests {
  font-size: 0.8125rem;
  color: #6b7280;
  line-height: 1.4;
  margin-top: 2px;
}
</style>
