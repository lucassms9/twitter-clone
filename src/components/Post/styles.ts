import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
  border-bottom-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.divider};
`;

export const ContentRePost = styled.View`
  flex-direction: row;
`;
export const ContainerUserName = styled.View`
  flex-direction: row;
`;
export const ContainerQuote = styled.View`
  margin-left: 16px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.divider};
  padding: 10px;
  border-radius: 12px;
`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 12px;
`;
export const ItemFooter = styled.View<{ marginRight?: number }>`
  flex-direction: row;
  margin-right: ${({ marginRight }) => (marginRight ? `${marginRight}px` : '0px')};
`;
export const Body = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 16px;
  margin: 10px 0px;
`;
export const TextRepost = styled.Text`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;
export const TextUserName = styled.Text`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 16px;
  margin-left: 2px;
`;
export const TextName = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 16px;
`;
export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 16px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-left: 5px;
`;

export const IconFooter = styled(Feather)`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-left: 5px;
`;
