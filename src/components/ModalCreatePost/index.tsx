import { Text } from '@components/Post/styles';
import React, { createRef, useCallback, useEffect, useState } from 'react';

import { TextInput, View } from 'react-native';
import useUser from '@store/user';

import Modal from 'react-native-modal';
import { usePostMutation } from '@services/client';
import { useQueryClient } from '@tanstack/react-query';
import { Post } from '@services/client/types';
import { Props } from './types';
import { Container, Input, Title, Footer, Button } from './styles';
import { theme } from '@styles/theme';

export const ModalCreatePost = ({ isVisible, onPress }: Props) => {
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

    mutate({
      id: createId,
      content: text,
      isReposted: false,
      author: {
        ...user
      }
    });
  }, [text, queryClient]);

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
