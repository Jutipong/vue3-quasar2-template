import { defineStore } from 'pinia';
import { IDrawer } from '@/types/layout';

export const useDrawer = defineStore('drawer', {
  state: () => ({
    menus: [
      {
        label: 'Home',
        icon: 'home',
        path: '/',
        // active: false,
      },
      {
        label: 'Master',
        icon: 'home',
        path: '/master',
        // active: false,
        childrens: [
          {
            label: 'User',
            icon: 'home',
            path: '/user',
            // active: false
          },
          {
            label: 'Role',
            icon: 'home',
            path: '/role',
            // active: false
          },
        ],
      },
      {
        label: 'Config',
        icon: 'home',
        path: '/config',
        // active: false,
        childrens: [
          {
            label: 'User',
            icon: 'home',
            path: '/user',
            // active: false
          },
          {
            label: 'Role',
            icon: 'home',
            path: '/role',
            // active: false
          },
        ],
      },
    ] as IDrawer[],
  }),
  getters: {},
  actions: {
    // onSelect(rootPath: string, childrenPath?: string) {
    //   this.$reset();
    //   // 1 level
    //   if (!childrenPath) {
    //     const root = this.menus.find(r => r.path === rootPath);
    //     if (root) {
    //       root.active = true;
    //     }
    //     return;
    //   }
    //   // 2 level
    //   const root = this.menus.find(r => r.path === rootPath);
    //   if (root) {
    //     root.active = true;
    //   }
    //   const children = root?.childrens?.find(r => r.path === childrenPath);
    //   if (children) {
    //     children.active = true;
    //   }
    // },
  },
});
