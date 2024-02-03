import { create } from 'zustand';
import User from './types/user-interface';

interface Store {
  user?: User;
  setUser: (user: User) => void;
  setAvatar: (avatar: string) => void;
}

const useUserStore = create<Store>()((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
  setAvatar: (avatar) =>
    set((state) => (state.user ? { user: { ...state.user, avatar } } : state)),
}));

export default useUserStore;
