import React from 'react';
import {Container, BannerItem, Title} from './styles';

export default function SliderItem({data, navigateDetailsPage}) {
  return (
    <Container activeOpacity={0.71} onPress={() => navigateDetailsPage(data)}>
      <BannerItem
        source={{
          uri: `${data.image}`,
        }}
      />
      <Title>{data.title}</Title>
    </Container>
  );
}
