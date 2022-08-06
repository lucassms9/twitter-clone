import { useQuery } from '@tanstack/react-query';

import api from '@services/api';

import { Profile, Post, Error } from './types';

export const usePosts = () => {
  return useQuery<Post[], Error, Post[]>(
    ['posts'],
    () => api.get<Post[]>('/posts/').then((data) => data.data),
    {
      cacheTime: 0,
      staleTime: Infinity,
    }
  );
};

export const getOwnerPosts = async (id: string) => {
  api.get('/post', {
    params: {
      'author.id': id
    }
  });
};

export const useProfile = (userId: number) => {
  return useQuery<Profile>(
    ['profile', userId],
    () => api.get<Profile>(`/profile/${userId}`).then((data) => data.data),
    {
      staleTime: Infinity
    }
  );
};
