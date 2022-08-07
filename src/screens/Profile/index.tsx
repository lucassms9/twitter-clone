import React, { useMemo, useState } from 'react';
import { Text } from '@components/Post/styles';

import { useOwnerPosts, useProfile } from '@services/client';
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import { Post as IPost, PostType } from '@services/client/types';
import Post from '@components/Post';
import useUser from '@store/user';
import FloatingButton from '@components/FloatingButton';
import ModalCreatePost from '@components/ModalCreatePost';

import { Container, Title, TextJoined, SubTitle, ContainerInfo, ContainerSub } from './styles';
import { format } from 'date-fns';
const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const user = useUser((state) => state.user);

  const { data: profileData } = useProfile(user.id);
  const { data } = useOwnerPosts(user.id);

  const renderItem = ({ item }: ListRenderItemInfo<IPost>) => {
    return <Post post={item} />;
  };
  const memoPosts = useMemo(() => {
    return data || ([] as IPost[]);
  }, [data]);

  const repostCount = useMemo(() => {
    const result = data?.reduce((acum, curr) => {
      if (curr.type === PostType.RePost) {
        acum += 1;
        return acum;
      }

      return acum;
    }, 0);
    return `Repost ${result} `;
  }, [data]);

  const quoteCount = useMemo(() => {
    const result = data?.reduce((acum, curr) => {
      if (curr.type === PostType.Quote) {
        acum += 1;
        return acum;
      }

      return acum;
    }, 0);
    return `Quote Post ${result} `;
  }, [data]);

  const postCount = useMemo(() => {
    const result = data?.reduce((acum, curr) => {
      if (curr.type === PostType.Post) {
        acum += 1;
        return acum;
      }

      return acum;
    }, 0);
    return `Posts ${result} `;
  }, [data]);

  const showDate = useMemo<string>(() => {
    if (profileData) {
      return format(new Date(profileData.joinedAt), 'MMMM dd, yyyy');
    }
    return '';
  }, [profileData]);

  return (
    <Container>
      <Title>
        {user.userName.length <= 14 ? `${user.userName}` : `${user.userName.substring(0, 15)}...`}
      </Title>
      <TextJoined>Joined at {showDate}</TextJoined>
      <ContainerInfo>
        <Text>{postCount}</Text>
        <Text>{repostCount}</Text>
        <Text>{quoteCount}</Text>
      </ContainerInfo>

      <ContainerSub>
        <SubTitle>Your Interactions</SubTitle>
      </ContainerSub>

      <FlashList data={memoPosts} renderItem={renderItem} estimatedItemSize={200} />
      <FloatingButton onPress={() => setShowModal((prev) => !prev)} />
      <ModalCreatePost isVisible={showModal} onClose={() => setShowModal((prev) => !prev)} />
    </Container>
  );
};
export default Profile;
