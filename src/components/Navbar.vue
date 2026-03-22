<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <router-link to="/" class="logo">lab name</router-link>
      <ul class="nav-links">
        <li><router-link to="/">Homepage</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/research">Research</router-link></li>
        <li><router-link to="/news">News</router-link></li>
        <li><router-link to="/members">Lab Member</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
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
}

.logo {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  text-decoration: none;
}

.logo:hover {
  color: #4b5563;
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
</style>
