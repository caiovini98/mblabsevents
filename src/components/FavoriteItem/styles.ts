import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 14px 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${props => props.size}px;
  font-weight: bold;
`;

export const ActionContainer = styled.View`
  align-items: center;
`;

export const Ticket = styled.Text`
  color: #fff;
`;
