import Vue from 'vue'
import VueRouter from 'vue-router'
import Inbox from '../views/Inbox-app.vue'
import Send from '../views/Send-app.vue'
import Trash from '../views/Trash-app.vue'
import Spam from '../views/Spam-app.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Inbox',
    name: 'Inbox',
    component: Inbox
  },
    {
    path: '/Send',
    name: 'Send',
    component: Send
  },
    {
    path: '/Trash',
    name: 'Trash',
    component: Trash
  },
  {
    path: '/Spam',
    name: 'Spam',
    component: Spam

  }
]

const router = new VueRouter({
  routes
})

export default router
