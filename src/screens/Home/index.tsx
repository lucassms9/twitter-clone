import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import React from 'react';
import { Text, View } from 'react-native';
import Post from '@components/Post';
import { Container } from './styles';
const Home = () => {
  const DATA = [
    {
      title: 'First Item'
    },
    {
      title: 'Second Item'
    },
    {
      title: 'Second Item'
    },
    {
      title: 'Second Item'
    },
    {
      title: 'Second Item'
    },
    {
      title: 'Second Item'
    }
  ];

  const renderItem = ({ item }: ListRenderItemInfo<{ title: string }>) => {
    return <Post />;
  };
  return (
    <Container>
      <FlashList data={DATA} renderItem={renderItem} estimatedItemSize={200} />
    </Container>
  );
};
export default Home;
