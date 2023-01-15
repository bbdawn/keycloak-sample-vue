import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import AxiosTest from "@/components/AxiosTest.vue";

const routes = [
  {
    // path: "/경로",
    // component: import해온 컴포넌트,
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/axios-test",
    component: AxiosTest,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 