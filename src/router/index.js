import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '@/components/todo/TodoList';
import ScavengerList from '@/components/scav/ScavengerList';
import Inventory from '@/components/inventory/Inventory';
import ClickGame from '@/components/clicker/ClickGame';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/scavenge',
      name: 'Scavenger List',
      component: ScavengerList,
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory,
    },
    {
      path: '/clicker',
      name: 'Clicker',
      component: ClickGame,
    },
  ],
});
