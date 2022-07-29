import React from 'react';
import {Container, Title, ActionContainer, Ticket} from './styles';

function FavoriteItem({data}) {
  return (
    <Container>
      <Title size={18}>{data?.title}</Title>

      <ActionContainer>
        <Ticket>
          Ingressos adquiridos: {data?.quantityTicket} inteira(s) e{' '}
          {data?.quantityHalfTicket} meia(s)
        </Ticket>
        <Ticket>Valor total: R$ {data?.valueTotal}</Ticket>
      </ActionContainer>
    </Container>
  );
}

export default FavoriteItem;
