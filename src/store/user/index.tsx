import create from 'zustand';

import type { State } from './types';

const useUser = create<State>(() => ({
  user: {
    id: 1,
    name: 'Joao Silva',
    userName: '@joao123'
  }
}));

export default useUser;
