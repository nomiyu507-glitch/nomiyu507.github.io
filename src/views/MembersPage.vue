<template>
  <div class="members-page">
    <section class="member-section">
      <h2 class="section-title">{{ t('members.professor') }}</h2>
      <div class="member-cards professor-cards">
        <MemberCard
          :name-en="professor.nameEn"
          :name-ko="professor.nameKo"
          :email="professor.email"
          :interests="professor.interests"
          :avatar="professor.avatar"
          :member-id="professor.id"
          wide
        />
      </div>
    </section>

    <section class="member-section">
      <h2 class="section-title">{{ t('members.researchStudents') }}</h2>
      <div class="member-cards student-cards">
        <MemberCard
          v-for="student in sortedStudents"
          :key="student.id"
          :name-en="student.nameEn"
          :name-ko="student.nameKo"
          :email="student.email"
          :interests="student.interests"
          :avatar="student.avatar"
          :member-id="student.id"
        />
      </div>
    </section>

    <section class="member-section">
      <h2 class="section-title">{{ t('members.graduatedStudents') }}</h2>
      <div class="member-cards student-cards">
        <MemberCard
          v-for="grad in graduatedStudents"
          :key="grad.id"
          :name-en="grad.nameEn"
          :name-ko="grad.nameKo"
          :email="grad.email"
          :interests="grad.interests"
          :avatar="grad.avatar"
          :member-id="grad.id"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MemberCard from '../components/MemberCard.vue'
import { professor, students, graduatedStudents } from '../data/members.js'

const { t } = useI18n()

const newlyAddedStudentIds = new Set([
  'qu-chengyuan',
  'zhang-bin',
  'wu-chenghao',
  'ji-xiaomeng',
  'kim-seungho'
])

// 博士、硕博连读在前，硕士在后
const sortedStudents = computed(() => {
  const isPhdOrCombined = s => s.role?.includes('Ph.D')
  return [...students].sort((a, b) => {
    const aIsNew = newlyAddedStudentIds.has(a.id)
    const bIsNew = newlyAddedStudentIds.has(b.id)
    if (aIsNew !== bIsNew) return aIsNew ? 1 : -1

    const aFirst = isPhdOrCombined(a) ? 0 : 1
    const bFirst = isPhdOrCombined(b) ? 0 : 1
    return aFirst - bFirst
  })
})
</script>

<style scoped>
.members-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 60px;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2563eb;
  margin: 0 0 40px;
  text-align: left;
}

.member-section {
  margin-bottom: 48px;
}

.member-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 20px;
  text-align: left;
}

.member-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.professor-cards {
  justify-content: flex-start;
}

.student-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .student-cards {
    grid-template-columns: 1fr;
  }
}
</style>
