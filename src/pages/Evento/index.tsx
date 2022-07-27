import {Text, ScrollView} from 'react-native';
import React from 'react';
import {
  Banner,
  Container,
  Description,
  Header,
  HeaderButton,
  ShareButton,
  Title,
  SubTitle,
  EventDetails,
  InputQuantity,
  ViewQuantity,
  ContainerPrice,
  ButtonComprarIngresso,
  TipoIngresso,
  TextComprarIngresso,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Event} from '../../models/Event';

const Evento = (props: any) => {
  const {route} = props;
  const navigation = useNavigation();

  const [quantityTicket, setQuantityTicket] = React.useState<number>(0);
  const [quantityHalfTicket, setQuantityHalfTicket] = React.useState<number>(0);
  const {item} = route.params;
  const event: Event = item;

  return (
    <Container>
      <Header>
        <HeaderButton onPress={() => navigation.goBack()}>
          <Icon name="keyboard-backspace" size={28} color="white" />
        </HeaderButton>
      </Header>
      <Banner
        source={{
          uri: `${event.image}`,
        }}
        resizeMethod="resize"
      />
      {/* <ShareButton onPress={shareLink}> */}
      <ShareButton
        onPress={() => {
          console.log('Compartilhar');
        }}>
        <Icon name="share-variant" size={24} color="black" />
      </ShareButton>
      <Title numberOfLines={2}>{event.title}</Title>
      <EventDetails>
        <SubTitle numberOfLines={2}>
          {event.date.date}, às {event.date.hour}
        </SubTitle>
        <SubTitle font="bold" numberOfLines={2}>
          {event.space}
        </SubTitle>
      </EventDetails>
      <SubTitle numberOfLines={2}>
        {event.location.street}, {event.location.district},{' '}
        {event.location.number === '' ? 'S/N' : event.location.number}
      </SubTitle>
      <SubTitle numberOfLines={2}>
        {event.location.complement === ''
          ? 'Sem complemento'
          : event.location.complement}
      </SubTitle>
      <SubTitle numberOfLines={2}>
        {event.location.city}, {event.location.state}
      </SubTitle>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Descrição</Title>
        <Description>{event.description}</Description>
        <ViewQuantity>
          <ContainerPrice>
            <TipoIngresso font="bold">Inteira</TipoIngresso>
            <TipoIngresso>R$ {event.price}</TipoIngresso>
          </ContainerPrice>
          <InputQuantity
            onChangeText={(value: number) => setQuantityTicket(value)}
            value={String(quantityTicket)}
            keyboardType="numeric"
          />
          <ContainerPrice>
            <TipoIngresso font="bold">Meia entrada</TipoIngresso>
            <TipoIngresso>R$ {event.price / 2}</TipoIngresso>
          </ContainerPrice>
          <InputQuantity
            onChangeText={(value: number) => setQuantityHalfTicket(value)}
            value={String(quantityHalfTicket)}
            keyboardType="numeric"
          />
        </ViewQuantity>
        <ButtonComprarIngresso onPress={() => console.log('Comprou')}>
          <TextComprarIngresso>COMPRAR INGRESSO(S)</TextComprarIngresso>
        </ButtonComprarIngresso>
      </ScrollView>
    </Container>
  );
};

export default Evento;
