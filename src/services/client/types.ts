import { AxiosError } from 'axios';

export interface Profile {
  id: number;
  joinedAt: Date;
  name: string;
  userName: string;
}

export type Author = Omit<Profile, 'joinedAt'>;
export interface PostParent {
  content: string;
  author: Author;
}

export interface Post {
  id: string;
  content: string;
  author: Author;
  isReposted: boolean;
  postParent?: PostParent;
  createdAt: number;
}

export type RawError = {
  error: {
    code: number;
    message: string;
  };
};

export type Error = AxiosError<RawError>;
