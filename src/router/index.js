import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import items from '../views/items.vue'
import inventories from '../views/inventories.vue'
import categories from '../views/categories.vue'
import addCategory from '../views/addCategory.vue'
import addInventory from '../views/addInventory.vue'
import addItem from '../views/addItem.vue'
import linkItem from '../views/linkItem.vue'
import details from '../views/details.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/items',
    name: 'items',
    component: items
  },
  {
    path: '/inventories',
    name: 'inventories',
    component: inventories
  },
  {
    path: '/categories',
    name: 'categories',
    component: categories
  },
  {
    path: '/add-category',
    name: 'addCategory',
    component: addCategory
  },
  {
    path: '/add-inventory',
    name: 'addInventory',
    component: addInventory
  },
  {
    path: '/add-item',
    name: 'addItem',
    component: addItem
  },
  {
    path: '/link-item',
    name: 'linkItem',
    component: linkItem
  },
  {
    path: '/details/:page',
    name: 'details',
    component: details,
    props: true 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
