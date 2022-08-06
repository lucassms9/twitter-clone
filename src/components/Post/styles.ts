import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  border-bottom-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.divider};
`;
