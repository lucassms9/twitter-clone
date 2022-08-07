import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  max-height: 400px;
  min-height: 200px;
  border-radius: 12px;
`;

export const Title = styled.Text`
  text-align: center;
  margin: 12px 0px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Input = styled.TextInput`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 16px;
  font-size: 14px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 12px;
  margin-bottom: 12px;
`;

export const Button = styled.TouchableOpacity<{ variant: string }>`
  height: 45px;
  width: 100px;
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.button.active : theme.colors.button.disabled};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: ${({ variant }) => (variant !== 'primary' ? '12px' : '0px')}; ;
`;
