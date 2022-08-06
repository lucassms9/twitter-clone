import { PostParent } from '@services/client/types';
import React from 'react';
import { ContainerQuote, ContainerUserName, TextName, TextUserName, Body } from './styles';
const PostQuote = ({ post }: { post: PostParent }) => {
  return (
    <ContainerQuote>
      <ContainerUserName>
        <TextName>{post.author.name}</TextName>
        <TextUserName>{post.author.userName}</TextUserName>
      </ContainerUserName>
      <Body>{post.content}</Body>
    </ContainerQuote>
  );
};
export default PostQuote;
