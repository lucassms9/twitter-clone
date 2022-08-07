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
import { Post as IPost } from '@services/client/types';
import { useOwnerPosts, usePostMutation } from '@services/client';
import { useQueryClient } from '@tanstack/react-query';
import useUser from '@store/user';
import ModalCreatePost from '@components/ModalCreatePost';
import { getTime, getUnixTime, isAfter, startOfToday } from 'date-fns';
import { uuid } from '@utils';
import { Alert } from 'react-native';

const Post = ({ post }: { post: IPost }) => {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();
  const user = useUser((state) => state.user);
  const { data: ownerPosts } = useOwnerPosts(user.id);
  const { mutate } = usePostMutation({
    onSuccess: () => {
      queryClient.refetchQueries(['posts']);
    }
  });

  const repost = useCallback(() => {
    const postsCreateToday =
      ownerPosts?.filter((post) => {
        const today = startOfToday();
        return isAfter(post.createdAt, today);
      }) || [];

    if (postsCreateToday.length > 5) {
      return Alert.alert('Alert!', 'You only can create 5 post per day');
    }

    mutate({
      id: uuid(),
      isReposted: true,
      content: '',
      author: {
        ...user
      },
      postParent: {
        content: post.content,
        author: {
          ...post.author
        }
      },
      createdAt: getTime(new Date())
    });
  }, [post, ownerPosts]);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);

  const quotePost = useCallback(() => {
    setShowModal(false);
  }, [post]);

  const headerContent = useMemo(() => {
    if (post.isReposted && post.postParent) {
      return {
        name: post.postParent.author.name,
        userName: post.postParent.author.userName
      };
    }
    return {
      name: post.author.name,
      userName: post.author.userName
    };
  }, [post]);

  return (
    <Container>
      {post.isReposted && (
        <ContentRePost>
          <TextRepost>Reposted by {post.author.name}</TextRepost>
          <Icon name='share-2' size={14} />
        </ContentRePost>
      )}

      <ContainerUserName>
        <TextName>{headerContent.name}</TextName>
        <TextUserName>{headerContent.userName}</TextUserName>
      </ContainerUserName>

      {post.isReposted && post.postParent && <Body>{post.postParent.content}</Body>}
      {post.content && <Body>{post.content}</Body>}

      {post.postParent && !post.isReposted && <PostQuote post={post.postParent} />}

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
        onPress={() => setShowModal((prev) => !prev)}
      />
    </Container>
  );
};

export default Post;
