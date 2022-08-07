import { Text } from '@components/Post/styles';
import React, { createRef, useCallback, useEffect, useMemo, useState } from 'react';
import { isAfter, startOfToday, getUnixTime, getTime } from 'date-fns';
import { Alert, ScrollView, TextInput, View } from 'react-native';
import useUser from '@store/user';

import Modal from 'react-native-modal';
import { useOwnerPosts, usePostMutation } from '@services/client';
import { useQueryClient } from '@tanstack/react-query';
import { Post } from '@services/client/types';
import { Props } from './types';
import {
  Container,
  Input,
  Title,
  Footer,
  Button,
  ContainerQuote,
  ContentCount,
  TextCount
} from './styles';
import { theme } from '@styles/theme';
import PostQuote from '@components/PostQuote';
import { uuid } from '@utils';
import { PostQuoteData } from '@components/PostQuote/types';

const MAX_LENGTH = 777;
export const ModalCreatePost = ({ isVisible, quotePost, onClose }: Props) => {
  const focusRef = createRef<TextInput>();
  const [content, setContent] = useState('');
  const user = useUser((state) => state.user);
  const queryClient = useQueryClient();
  const { data: ownerPosts } = useOwnerPosts(user.id);
  const { mutate } = usePostMutation({
    onSuccess: () => {
      onClose();
      queryClient.refetchQueries(['posts']);
      setContent('');
    }
  });

  useEffect(() => {
    focusRef?.current?.focus();
  }, [focusRef]);

  const onSubmit = useCallback(() => {
    const postsCreateToday =
      ownerPosts?.filter((post) => {
        const today = startOfToday();
        return isAfter(post.createdAt, today);
      }) || [];

    if (postsCreateToday.length > 5) {
      return Alert.alert('Alert!', 'You only can create 5 post per day');
    }

    if (content.length > MAX_LENGTH) {
      return Alert.alert('Alert!', 'Your can have a maximum of 777 characters');
    }

    const body = {
      id: uuid(),
      content,
      isReposted: false,
      author: {
        ...user
      },
      createdAt: getTime(new Date())
    } as Post;
    if (quotePost) {
      body.postParent = {
        ...quotePost
      };
    }

    mutate(body);
  }, [content, queryClient]);

  const postParent = useMemo(() => {
    return quotePost || ({} as Post);
  }, [quotePost]);

  const onCancel = useCallback(() => {
    onClose();
    setContent('');
  }, [onClose]);

  const handleOnChangeText = useCallback(
    (text: string) => {
      if (text.length <= MAX_LENGTH) {
        setContent(text);
      }
    },
    [content, setContent]
  );

  return (
    <Modal animationIn='fadeInUp' animationOut={'fadeOutDown'} isVisible={isVisible}>
      <Container>
        <View>
          <Title>Nova Publicaçao</Title>
        </View>
        <Input
          ref={focusRef}
          placeholder={'Whats happening?'}
          placeholderTextColor={theme.colors.text.disabled}
          multiline
          onChangeText={handleOnChangeText}
          value={content}
        />
        <ContentCount>
          <TextCount>
            {content.length}/{MAX_LENGTH}
          </TextCount>
        </ContentCount>

        {postParent && (
          <ContainerQuote>
            <PostQuote post={postParent} modalRender />
          </ContainerQuote>
        )}
        <Footer>
          <Button variant='secondary' onPress={onCancel}>
            <Text>Cancelar</Text>
          </Button>
          <Button variant='primary' onPress={onSubmit}>
            <Text>Enviar</Text>
          </Button>
        </Footer>
      </Container>
    </Modal>
  );
};

export default ModalCreatePost;
