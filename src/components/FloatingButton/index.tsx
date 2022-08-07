import React from 'react';

import { Container, Icon } from './styles';
import { Props } from './types';
const FloatingButton = ({ onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon name='edit' size={25} />
    </Container>
  );
};

export default FloatingButton;
