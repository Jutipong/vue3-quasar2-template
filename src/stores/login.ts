import { IOption, IUser } from '@/types/login';

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    User: <IUser>{
      UserName: 'admin',
      Password: '1234',
    },
    Option: <IOption>{
      Loading: false,
      ShowPassword: false,
    },
  }),
  getters: {},
  actions: {
    toggleLoading() {
      this.Option.Loading = !this.Option.Loading;
    },
  },
});
