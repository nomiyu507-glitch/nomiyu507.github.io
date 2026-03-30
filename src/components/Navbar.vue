<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <router-link to="/" class="logo">{{ t('nav.logo') }}</router-link>
      <div class="nav-right">
        <ul class="nav-links">
          <li><router-link to="/">{{ t('nav.homepage') }}</router-link></li>
          <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
          <li><router-link to="/research">{{ t('nav.research') }}</router-link></li>
          <li><router-link to="/news">{{ t('nav.news') }}</router-link></li>
          <li><router-link to="/members">{{ t('nav.labMember') }}</router-link></li>
        </ul>
        <div class="lang-switch" role="group" :aria-label="t('lang.en') + ' / ' + t('lang.ko')">
          <button
            type="button"
            class="lang-btn"
            :class="{ active: locale === 'en' }"
            @click="setLocale('en')"
          >
            {{ t('lang.en') }}
          </button>
          <span class="lang-sep" aria-hidden="true">|</span>
          <button
            type="button"
            class="lang-btn"
            :class="{ active: locale === 'ko' }"
            @click="setLocale('ko')"
          >
            {{ t('lang.ko') }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { persistLocale } from '../i18n'

const { locale, t } = useI18n()

function setLocale(lang) {
  if (locale.value === lang) return
  locale.value = lang
  persistLocale(lang)
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  text-decoration: none;
  flex-shrink: 0;
}

.logo:hover {
  color: #4b5563;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-links {
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  padding: 8px 16px;
  color: #4b5563;
  text-decoration: none;
  font-size: 0.9375rem;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}

.nav-links a:hover {
  color: #1f2937;
  background: #f3f4f6;
}

.nav-links a.router-link-active {
  color: #1f2937;
  font-weight: 500;
}

.lang-switch {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.lang-btn {
  padding: 6px 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
}

.lang-btn:hover {
  color: #1f2937;
  background: #f3f4f6;
}

.lang-btn.active {
  color: #1f2937;
  background: #e5e7eb;
}

.lang-sep {
  color: #d1d5db;
  font-size: 0.75rem;
  user-select: none;
}

@media (max-width: 900px) {
  .navbar-inner {
    height: auto;
    min-height: 56px;
    padding: 12px 16px;
    flex-wrap: wrap;
  }

  .nav-right {
    width: 100%;
    justify-content: space-between;
  }

  .nav-links {
    flex-wrap: wrap;
    gap: 4px;
  }

  .nav-links a {
    padding: 6px 10px;
    font-size: 0.875rem;
  }
}
</style>
