import React, { useMemo, useState } from 'react';
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';

import Post from '@components/Post';
import { Container } from './styles';
import { usePosts } from '@services/client';
import { Post as IPost } from '@services/client/types';
import FloatingButton from '@components/FloatingButton';
import ModalCreatePost from '@components/ModalCreatePost';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const { data } = usePosts();

  const renderItem = ({ item }: ListRenderItemInfo<IPost>) => {
    return <Post post={item} />;
  };
  const memoPosts = useMemo(() => {
    return data || ([] as IPost[]);
  }, [data]);

  return (
    <Container>
      <FlashList data={memoPosts} renderItem={renderItem} estimatedItemSize={200} />
      <FloatingButton onPress={() => setShowModal((prev) => !prev)} />
      <ModalCreatePost isVisible={showModal} onClose={() => setShowModal((prev) => !prev)} />
    </Container>
  );
};
export default Home;
