import React, {useContext} from 'react';
import {Container, ListEvents} from './styles';
import Header from '../../components/Header';
import FavoriteItem from '../../components/FavoriteItem';
import {EventContext} from '../../contexts/EventContext';
import {Event} from '../../models/Event';

const MeusEventos = () => {
  const {events} = useContext(EventContext);

  return (
    <Container>
      <Header title="Meus Eventos" />

      <ListEvents
        showsVerticalScrollIndicator={false}
        data={events}
        keyExtractor={(item: Event) => item.title}
        renderItem={({item}) => <FavoriteItem data={item} />}
      />
    </Container>
  );
};

export default MeusEventos;
