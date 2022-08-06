import styled from 'styled-components/native';

export const ContainerQuote = styled.View`
  margin-left: 16px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.divider};
  padding: 10px;
  border-radius: 12px;
`;

export const ContainerUserName = styled.View`
  flex-direction: row;
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
export const Body = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 16px;
  margin: 10px 0px;
`;
