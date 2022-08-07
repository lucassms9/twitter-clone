import { Post } from '@services/client/types';

export type PostQuoteData = {
  name: string;
  userName: string;
  content: string;
};

export type PostQuoteProps = {
  post: Post;
  modalRender?: boolean;
};
