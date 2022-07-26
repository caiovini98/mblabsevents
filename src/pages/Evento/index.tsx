import {Text, ScrollView} from 'react-native';
import React from 'react';
import {
  Banner,
  ButtonLink,
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
import {useNavigation, useRoute} from '@react-navigation/native';

const Evento = ({item}) => {
  const [number, onChangeNumber] = React.useState<number>(0);
  const navigation = useNavigation();
  const route = useRoute();
  //   console.log('route.params: ', route.params?.item);
  return (
    <Container>
      <Header>
        <HeaderButton onPress={() => navigation.goBack()}>
          <Icon name="keyboard-backspace" size={28} color="white" />
        </HeaderButton>
      </Header>

      <Banner
        source={{
          uri: `https://tm.ibxk.com.br/2022/05/04/04181552447728.jpg?ims=532x336`,
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
      <Title numberOfLines={2}>Evento</Title>
      <EventDetails>
        <SubTitle numberOfLines={2}>30/07/2022, às 20h</SubTitle>
        <SubTitle font="bold" numberOfLines={2}>
          Cine Theatro Central
        </SubTitle>
      </EventDetails>
      <SubTitle numberOfLines={2}>
        Praça João Pessoa, Calçadão da Rua Halfeld, 82
      </SubTitle>
      <SubTitle numberOfLines={2}>Centro Juiz de Fora, Minas Gerais</SubTitle>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Descrição</Title>
        <Description>
          O espetáculo "O Aviador e o Príncipe" uma produção de Patrícia
          Oliveira, realizado para todas as idades irá apresentar uma leitura
          filosófica e contemporânea da obra do francês Antoine de Saint-Exupéry
          "O Pequeno Príncipe". É escrito pelos filósofos e dramaturga Regina
          Schöpke e Mauro Baladi, a partir da relação imaginária de um aviador,
          que encontra-se consigo mesmo, em uma viagem de autoconhecimento no
          deserto, após fazer um pouso forçado de seu avião correio, e bater a
          sua cabeça
        </Description>
        <ViewQuantity>
          <ContainerPrice>
            <TipoIngresso font="bold">Inteira</TipoIngresso>
            <TipoIngresso>R$ 50.00</TipoIngresso>
          </ContainerPrice>
          <InputQuantity
            onChangeText={(value: any) => onChangeNumber(value)}
            value={String(number)}
            keyboardType="numeric"
          />
          <ContainerPrice>
            <TipoIngresso font="bold">Meia entrada</TipoIngresso>
            <TipoIngresso>R$ 25.00</TipoIngresso>
          </ContainerPrice>
          <InputQuantity
            onChangeText={(value: any) => onChangeNumber(value)}
            value={String(number)}
            keyboardType="numeric"
          />
        </ViewQuantity>
        <ButtonComprarIngresso onPress={() => console.log('Comprou ')}>
          <TextComprarIngresso>COMPRAR INGRESSO(S)</TextComprarIngresso>
        </ButtonComprarIngresso>
      </ScrollView>
    </Container>
  );
};

export default Evento;
