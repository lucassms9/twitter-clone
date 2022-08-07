import create from 'zustand';

import type { State } from './types';

const useUser = create<State>(() => ({
  user: {
    id: 3,
    name: 'Lucas Mendonça',
    userName: '@lucassms9'
  }
}));

export default useUser;
