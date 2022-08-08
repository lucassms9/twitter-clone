import React, { useCallback, useMemo, useState } from 'react';
import {
  Container,
  ContainerUserName,
  Body,
  ContentRePost,
  TextRepost,
  Icon,
  IconFooter,
  TextUserName,
  TextName,
  Text,
  Footer,
  ItemFooter
} from './styles';

import PostQuote from '@components/PostQuote';
import { Post as IPost, PostType } from '@services/client/types';
import { useOwnerPosts, usePostMutation } from '@services/client';
import { useQueryClient } from '@tanstack/react-query';
import useUser from '@store/user';
import ModalCreatePost from '@components/ModalCreatePost';
import { getTime, isAfter, startOfToday } from 'date-fns';
import { LIMIT_POST, uuid } from '@utils';
import { Alert } from 'react-native';
import { createUseOwnerPostsKey, createUsePostsKey } from '@services/client/keys';

const Post = ({ post }: { post: IPost }) => {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();
  const user = useUser((state) => state.user);
  const { data: ownerPosts } = useOwnerPosts(user.id);
  const { mutate } = usePostMutation({
    onSuccess: (data) => {
      queryClient.setQueryData<IPost[] | undefined>(createUsePostsKey(), (snapshot) => {
        if (snapshot) {
          return [data, ...snapshot];
        }
      });
      queryClient.setQueryData<IPost[] | undefined>(createUseOwnerPostsKey(user.id), (snapshot) => {
        if (snapshot) {
          return [data, ...snapshot];
        }
      });
    }
  });

  const repost = useCallback(() => {
    const postsCreateToday =
      ownerPosts?.filter((post) => {
        const today = startOfToday();
        return isAfter(post.createdAt, today);
      }) || [];

    if (postsCreateToday.length >= LIMIT_POST) {
      return Alert.alert('Alert!', 'You only can create 5 post per day');
    }
    const body = {
      id: uuid(),
      isReposted: true,
      content: '',
      author: {
        ...user
      },
      createdAt: getTime(new Date()),
      type: PostType.RePost
    } as IPost;

    if (post.type === PostType.RePost) {
      body.postParent = post.postParent;
    } else {
      body.postParent = post;
    }
    mutate(body);
  }, [post, ownerPosts]);

  const headerContent = useMemo(() => {
    if (post.type === PostType.RePost && post.postParent) {
      return {
        name: post.postParent.author.name,
        userName: post.postParent.author.userName,
        id: post.postParent.author.id
      };
    }
    return {
      name: post.author.name,
      userName: post.author.userName,
      id: post.author.id
    };
  }, [post]);

  return (
    <Container>
      {post.type === PostType.RePost && (
        <ContentRePost>
          <TextRepost>Reposted by {post.author.name}</TextRepost>
          <Icon name='share-2' size={14} />
        </ContentRePost>
      )}

      <ContainerUserName>
        <TextName>{headerContent.name}</TextName>
        <TextUserName>{headerContent.userName}</TextUserName>
      </ContainerUserName>

      {post.type === PostType.RePost && post.postParent && <Body>{post.postParent.content}</Body>}
      {post.content && <Body>{post.content}</Body>}

      <PostQuote post={post} />

      <Footer>
        <ItemFooter marginRight={20} onPress={repost}>
          <Text>Repost</Text>
          <IconFooter name='share-2' color={'#fff'} size={16} />
        </ItemFooter>
        <ItemFooter onPress={() => setShowModal((prev) => !prev)}>
          <Text>Quote-post</Text>
          <IconFooter name='edit' color={'#fff'} size={16} />
        </ItemFooter>
      </Footer>
      <ModalCreatePost
        quotePost={post}
        isVisible={showModal}
        onClose={() => setShowModal((prev) => !prev)}
      />
    </Container>
  );
};

export default Post;
