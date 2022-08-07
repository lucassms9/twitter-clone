import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme?.colors?.background};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme?.colors.text.primary};
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0px;
`;

export const TextJoined = styled.Text`
  color: ${({ theme }) => theme?.colors.text.secondary};

  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme?.colors.text.primary};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0px;
`;

export const ContainerSub = styled.View`
  border-bottom-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.divider};
`;
