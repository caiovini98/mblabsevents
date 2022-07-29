import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #141a29;
  flex: 1;
  padding: 4px 0;
`;

export const Title = styled.Text`
  padding: 20px 14px 8px 14px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const Banner = styled.Image`
  height: 150px;
  border-radius: 6px;
  margin: 0 14px;
`;

export const BannerButton = styled.TouchableOpacity``;

export const SliderEvents = styled.FlatList`
  margin-bottom: 12px;
  height: 220px;
  padding: 0 14px;
`;
