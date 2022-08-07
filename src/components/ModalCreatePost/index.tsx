import { Text } from '@components/Post/styles';
import React, { createRef, useCallback, useEffect, useMemo, useState } from 'react';

import { ScrollView, TextInput, View } from 'react-native';
import useUser from '@store/user';

import Modal from 'react-native-modal';
import { usePostMutation } from '@services/client';
import { useQueryClient } from '@tanstack/react-query';
import { Post, PostParent } from '@services/client/types';
import { Props } from './types';
import { Container, Input, Title, Footer, Button, ContainerQuote } from './styles';
import { theme } from '@styles/theme';
import PostQuote from '@components/PostQuote';

export const ModalCreatePost = ({ isVisible, quotePost, onPress }: Props) => {
  const focusRef = createRef<TextInput>();
  const [text, onChange] = useState('');
  const user = useUser((state) => state.user);
  const queryClient = useQueryClient();

  const { mutate } = usePostMutation({
    onSuccess: () => {
      onPress();
      queryClient.refetchQueries(['posts']);
      onChange('');
    }
  });

  useEffect(() => {
    focusRef?.current?.focus();
  }, [focusRef]);

  const onSubmit = useCallback(() => {
    const data = queryClient.getQueryData<Post[]>(['posts']) || [];
    const createId = data.length > 0 ? data[0].id + 1 : 1;

    const body = {
      id: createId,
      content: text,
      isReposted: false,
      author: {
        ...user
      }
    } as Post;
    if (quotePost) {
      body.postParent = {
        ...quotePost
      };
    }
    mutate(body);
  }, [text, queryClient]);

  const postParent = useMemo(() => {
    if (quotePost) {
      return {
        author: {
          ...quotePost.author
        },
        content: quotePost.content
      } as PostParent;
    }
  }, [quotePost]);

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
          onChangeText={onChange}
          value={text}
        />
        {postParent && (
          <ContainerQuote>
            <PostQuote post={postParent} />
          </ContainerQuote>
        )}
        <Footer>
          <Button variant='secondary' onPress={onPress}>
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
