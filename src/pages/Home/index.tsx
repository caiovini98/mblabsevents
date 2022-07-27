import {ScrollView, Text} from 'react-native';
import React from 'react';
import {
  Container,
  Title,
  Banner,
  BannerButton,
  Input,
  SearchButton,
  SearchContainer,
  SliderMovies,
} from './styles';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';
import {useNavigation} from '@react-navigation/native';
import {Response} from '../../models/Response';
import {Event} from '../../models/Event';

const Home = () => {
  const jsonData: Response = require('../../../events.json');
  const navigation = useNavigation();

  const navigateDetailsPage = item => {
    navigation.navigate('Evento', {item});
  };

  return (
    <Container>
      <Header title="MB Events" />

      <ScrollView>
        <Title>Estreia</Title>
        <BannerButton
          activeOpacity={0.9}
          onPress={() => navigateDetailsPage(jsonData.premiere)}>
          <Banner
            resizeMethod="resize"
            source={{
              uri: `${jsonData.premiere.image}`,
            }}
          />
        </BannerButton>
        <Title>Destaques</Title>
        <SliderMovies
          keyExtrator={item => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={jsonData.highlights}
          renderItem={({item}) => (
            <SliderItem
              data={item}
              navigateDetailsPage={() => navigateDetailsPage(item)}
            />
          )}
        />
        <Title>Mais Populares</Title>
        <SliderMovies
          keyExtrator={item => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={jsonData.popular}
          renderItem={({item}) => (
            <SliderItem
              data={item}
              navigateDetailsPage={() => navigateDetailsPage(item)}
            />
          )}
        />
      </ScrollView>
    </Container>
  );
};

export default Home;
