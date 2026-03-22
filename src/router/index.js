import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MembersPage from '../views/MembersPage.vue'
import MemberDetailPage from '../views/MemberDetailPage.vue'
import ProjectDetailPage from '../views/ProjectDetailPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/members',
      name: 'members',
      component: MembersPage
    },
    {
      path: '/members/:id',
      name: 'member',
      component: MemberDetailPage
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: ProjectDetailPage
    }
  ]
})

export default router
