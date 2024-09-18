// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import PostPage from '@/views/PostPage.vue';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ChatsPage from '@/views/ChatsPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path:'/posts',
    name:'Posts',
    component: PostPage,

  },
  {
    path:'/chats',
    name:'Chats',
    component:ChatsPage,
  },
  {
    path:'/profile',
    name:'Profile',
    component:ProfilePage,
  }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
