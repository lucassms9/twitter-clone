import { useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query';

import api from '@services/api';

import { Profile, Post, Error } from './types';

export const usePostMutation = (options?: UseMutationOptions<Post, Error, Post>) => {
  return useMutation((param: Post) => {
    return api
      .post<Post>('/posts', {
        ...param
      })
      .then((data) => data.data);
  }, options);
};

export const usePosts = () => {
  return useQuery<Post[], Error, Post[]>(['posts'], () =>
    api.get<Post[]>('/posts/?_sort=createdAt&_order=desc').then((data) => data.data)
  );
};

export const useOwnerPosts = (id: number) => {
  return useQuery<Post[], Error, Post[]>(['posts', 'user', id], () =>
    api.get<Post[]>(`/posts/?author.id=${id}`).then((data) => data.data)
  );
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
