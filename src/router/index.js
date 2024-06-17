import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import ErrorBoundary from '../components/ErrorBoundary.vue'
import NotFound from '../components/NotFound.vue'
import RepoCards from '../components/RepoCards.vue'
import SingleRepo from '../components/SingleRepo.vue'

const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL, // I added this inside the createWebHistory parantheses but it returns process is not defined
  routes: [
    {
      path: '/',
      alias: '/home',
      component: HomePage,
      name: 'Home',
      meta: { title: 'Home Page', description: 'Home page' }
    },
    {
      path: '/errorBoundary',
      component: ErrorBoundary,
      name: 'ErrorBoundary Page',
      meta: { title: 'ErrorBoundary', description: 'Test error boundary' }
    },
    {
      path: '/:pathMatch(.*)*',
      alias: '/error404',
      component: NotFound,
      name: 'NotFound',
      meta: { title: 'NotFound', description: `The page doesn't exist` }
    },
    {
      path: '/repoCards',
      component: RepoCards,
      name: 'Repository Cards',
      meta: {
        title: 'Repository Cards',
        description: 'All repositories'
      }
    },
    {
      path: '/singleRepo/:name',
      component: SingleRepo,
      name: 'Single Repository',
      meta: {
        title: 'Expanded Repository',
        description: 'A repository in view'
      }
    }
  ]
})

export default router
