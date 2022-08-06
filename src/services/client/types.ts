import { AxiosError } from 'axios';

export interface Profile {
  id: number;
  joinedAt: Date;
  name: string;
  userName: string;
}

type Author = Omit<Profile, 'joinedAt'>;
export interface PostParent {
  content: string;
  author: Author;
}

export interface Post {
  id: number;
  content: string;
  author: Author;
  isReposted: boolean;
  postParent: PostParent;
}

export type RawError = {
  error: {
    code: number;
    message: string;
  };
};

export type Error = AxiosError<RawError>;
