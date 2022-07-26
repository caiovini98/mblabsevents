import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Container, BannerItem, RateContainer, Rate, Title} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SliderItem({data, navigateDetailsPage}) {
  return (
    <Container activeOpacity={0.71} onPress={() => navigateDetailsPage(data)}>
      {/* <Container activeOpacity={0.71}> */}
      <BannerItem
        source={{
          uri: `https://i.ytimg.com/vi/k42HgNZemCQ/maxresdefault.jpg`,
        }}
      />
      <Text>{data} nome do evento</Text>
    </Container>
  );
}
