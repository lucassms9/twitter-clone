import React, { useMemo } from 'react';
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

const Post = ({ post }: { post: IPost }) => {
  
  const headerContent = useMemo(() => {
    if (post.isReposted) {
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

      {post.isReposted && <Body>{post.postParent.content}</Body>}
      {post.content && <Body>{post.content}</Body>}

      {post.postParent && !post.isReposted && <PostQuote post={post.postParent} />}

      <Footer>
        <ItemFooter marginRight={20}>
          <Text>Repost</Text>
          <IconFooter name='share-2' color={'#fff'} size={16} />
        </ItemFooter>
        <ItemFooter style={{ flexDirection: 'row' }}>
          <Text>Quote-post</Text>
          <IconFooter name='edit' color={'#fff'} size={16} />
        </ItemFooter>
      </Footer>
    </Container>
  );
};

export default Post;
