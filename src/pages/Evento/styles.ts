import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #191a30;
`;

export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 35px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: rgba(25, 26, 48, 0.8);
  border-radius: 23px;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
`;

export const ShareButton = styled.TouchableOpacity`
  background-color: #fff;
  width: 63px;
  height: 63px;
  border-radius: 35px;
  position: absolute;
  top: 305px;
  right: 15px;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  padding: 2px 14px;
  margin-top: 8px;
`;

export const EventDetails = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SubTitle = styled.Text`
  font-weight: ${props => props.font || 'normal'};
  color: #fff;
  font-size: 14px;
  padding: 2px 14px;
`;

export const Description = styled.Text`
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 15px;
  color: #fff;
  line-height: 20px;
`;

export const ViewQuantity = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerPrice = styled.View`
  display: flex;
  align-items: center;
`;

export const TipoIngresso = styled.Text`
  font-weight: ${props => props.font || 'normal'};
`;

export const InputQuantity = styled.TextInput`
  height: 50px;
  width: 50px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
`;

export const ButtonComprarIngresso = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 25px;
  border-width: 1px;
  padding: 12px;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 8px;
`;

export const TextComprarIngresso = styled.Text``;
