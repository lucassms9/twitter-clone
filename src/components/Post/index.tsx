import React from 'react';
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
  ItemFooter,
} from './styles';

import PostQuote from '@components/PostQuote'

const Post = () => {
  return (
    <Container>
      <ContentRePost>
        <TextRepost>Reposted by Lucas</TextRepost>
        <Icon name='share-2' size={14} />
      </ContentRePost>
      <ContainerUserName>
        <TextName>Lucas Santos</TextName>
        <TextUserName>@lucassms9</TextUserName>
      </ContainerUserName>

      <Body>asd</Body>

      <PostQuote />

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
