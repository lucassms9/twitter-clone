import create from 'zustand';

import type { State } from './types';

const useUser = create<State>(() => ({
  id: '1'
}));

export default useUser;
