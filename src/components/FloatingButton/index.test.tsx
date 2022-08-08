import React from 'react';

import { render } from '@tests/providers';

import FloatingButton from './index';

jest.mock('react-native-vector-icons/Feather', () => 'Icon');

describe('Floating Button component', () => {
  it('should render with success', () => {
    const { toJSON } = render(<FloatingButton onPress={jest.fn()} />, null);
    expect(toJSON()).toMatchSnapshot();
  });
});
