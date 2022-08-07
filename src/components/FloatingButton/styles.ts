import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${({ theme }) => theme.colors.button.background};
  position: absolute;
  bottom: 25px;
  right: 25px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FeatherIcon)`
  color: ${({ theme }) => theme.colors.text.primary};
`;
// width: 70,
//         height: 70,
//         borderRadius: 35,
//         backgroundColor: '#0057b7',
//         position: 'absolute',
//         bottom: 25,
//         right: 25,
//         justifyContent: 'center',
//         alignItems: 'center'
