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

const Home = () => {
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
          // onPress={() => navigateDetailsPage(movieBanner)}
        >
          <Banner
            resizeMethod="resize"
            source={{
              uri: `https://tm.ibxk.com.br/2022/05/04/04181552447728.jpg?ims=532x336`,
            }}
          />
        </BannerButton>
        <Title>Destaques</Title>
        <SliderMovies
          keyExtrator={item => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[0, 1, 2, 3, 4, 5]}
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
          data={[0, 1, 2, 3, 4, 5]}
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
