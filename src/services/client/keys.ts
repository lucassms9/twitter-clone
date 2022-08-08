import { QueryKey } from '@tanstack/react-query';

export const createUsePostsKey = (): QueryKey => ['posts'];
export const createUseOwnerPostsKey = (id: number): QueryKey => ['posts', 'user', id];
export const createUseProfileKey = (userId: number): QueryKey => ['profile', userId];
