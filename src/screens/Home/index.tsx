import React, { useEffect } from 'react';
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';

import { Text, View } from 'react-native';
import Post from '@components/Post';
import { Container } from './styles';
import useUser from '@store/user';
import { usePosts } from '@services/client';
import { Post as IPost } from '@services/client/types';

const Home = () => {
  const { data } = usePosts();

  const renderItem = ({ item }: ListRenderItemInfo<IPost>) => {
    return <Post post={item} />;
  };
  return (
    <Container>
      <FlashList data={data?.reverse()} renderItem={renderItem} estimatedItemSize={200} />
    </Container>
  );
};
export default Home;
