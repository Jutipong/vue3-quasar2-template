import { defineStore } from 'pinia';
import { IDrawer } from '@/types/Layouts';

export const useDrawer = defineStore('drawer', {
  state: () => ({
    menus: [
      {
        label: 'Home',
        icon: 'mdi:home',
        path: '/',
        active: false,
      },
      {
        label: 'Master',
        icon: 'mdi:home',
        path: '/master',
        active: false,
        childrens: [
          { label: 'User', icon: 'mdi:home', path: '/user', active: false },
          { label: 'Role', icon: 'mdi:home', path: '/role', active: false },
        ],
      },
      {
        label: 'Config',
        icon: 'mdi:home',
        path: '/config',
        active: false,
        childrens: [
          { label: 'User', icon: 'mdi:home', path: '/user', active: false },
          { label: 'Role', icon: 'mdi:home', path: '/role', active: false },
        ],
      },
    ] as IDrawer[],
  }),
  getters: {},
  actions: {
    onSelect(rootPath: string, childrenPath?: string) {
      this.$reset();

      // 1 level
      if (!childrenPath) {
        const root = this.menus.find(r => r.path === rootPath);
        if (root) {
          root.active = true;
        }
        return;
      }

      // 2 level
      const root = this.menus.find(r => r.path === rootPath);
      if (root) {
        root.active = true;
      }
      const children = root?.childrens?.find(r => r.path === childrenPath);
      if (children) {
        children.active = true;
      }
    },
  },
});
