import { PostType } from '@services/client/types';
import React, { useMemo } from 'react';
import { ContainerQuote, ContainerUserName, TextName, TextUserName, Body } from './styles';
import { PostQuoteData, PostQuoteProps } from './types';

const PostQuote = ({ post, modalRender = false }: PostQuoteProps) => {
  if (
    ((post.type === PostType.RePost && !post.postParent?.postParent) || !post.postParent) &&
    !modalRender
  ) {
    return null;
  }

  const renderData = useMemo<PostQuoteData>(() => {
    if (modalRender && post.type !== PostType.RePost) {
      return {
        name: post.author.name,
        userName: post.author.userName,
        content: post.content
      };
    }
    if (modalRender && post.type === PostType.RePost && post.postParent) {
      return {
        name: post.postParent.author.name,
        userName: post.postParent.author.userName,
        content: post.postParent.content
      };
    }

    if (post.type === PostType.RePost && post.postParent?.type === PostType.Quote) {

      return {
        name: post.postParent?.postParent?.author.name || '',
        userName: post.postParent?.postParent?.author.userName || '',
        content: post.postParent?.postParent?.content || ''
      };
    }

    if (post.postParent?.postParent) {
      return {
        name: post.postParent.postParent.author.name,
        userName: post.postParent.postParent.author.userName,
        content: post.postParent.postParent.content
      };
    }

    return {
      name: post.postParent?.author?.name || '',
      userName: post.postParent?.author?.userName || '',
      content: post.postParent?.content || ''
    };
  }, [post]);

  return (
    <ContainerQuote>
      <ContainerUserName>
        <TextName>{renderData.name}</TextName>
        <TextUserName>{renderData.userName}</TextUserName>
      </ContainerUserName>
      <Body>{renderData.content}</Body>
    </ContainerQuote>
  );
};
export default PostQuote;
