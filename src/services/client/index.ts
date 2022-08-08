import { useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query';

import api from '@services/api';

import { Profile, Post, Error } from './types';
import { createUseOwnerPostsKey, createUsePostsKey, createUseProfileKey } from './keys';

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
  return useQuery<Post[], Error, Post[]>(createUsePostsKey(), () =>
    api.get<Post[]>('/posts/?_sort=createdAt&_order=desc').then((data) => data.data)
  );
};

export const useOwnerPosts = (id: number) => {
  return useQuery<Post[], Error, Post[]>(createUseOwnerPostsKey(id), () =>
    api.get<Post[]>(`/posts/?author.id=${id}&_sort=createdAt&_order=desc`).then((data) => data.data)
  );
};

export const useProfile = (userId: number) => {
  return useQuery<Profile>(
    createUseProfileKey(userId),
    () => api.get<Profile>(`/profile/${userId}`).then((data) => data.data),
    {
      staleTime: Infinity
    }
  );
};
