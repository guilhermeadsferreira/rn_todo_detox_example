import {AnimatedLayout} from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  ${({theme: {lightGrey}}) => `
    background-color: ${lightGrey};
  `}
`;

export const Header = styled.View`
  ${({theme: {mainBlack}}) => `
		height: 120px;
		background-color: ${mainBlack};
		width: 100%;
		flex-direction: row;
		padding: 0 5%;
		align-items: center;
		justify-content: space-between;
	`}
`;

export const HeaderTitle = styled.Text`
  ${({theme: {bold, mainWhite}}) => `
		font-family: ${bold};
		font-size: 28px;
		color: ${mainWhite};
	`}
`;

export const TodoNumber = styled.Text<{isBold?: boolean}>`
  ${({isBold, theme: {regular, bold, mainWhite}}) => `
		font-family: ${isBold ? bold : regular};
		font-size: 16px;
		color: ${mainWhite};
	`}
`;

export const TodoInput = styled.TextInput`
  background-color: white;
  width: 88%;
  height: 55px;
  align-self: center;
  margin-top: -20px;
  border-radius: 6px;

  ${({theme: {regular, mainBlack}}) => `
	font-family: ${regular};
	font-size: 14.5px;
	color: ${mainBlack};
	padding: 3px 0px 0px 12px;
  margin-bottom: 10px;
  `}
`;

export const HistoryButton = styled.TouchableOpacity`
  position: absolute;
  right: 12px;
  bottom: 15px;
  border-radius: 12px;
  padding: 6px;

  ${({theme: {mainGrey}}) => `
  	background-color: ${mainGrey};
  `}
`;

export const HistoryImage = styled.Image.attrs({
  source: require('../../assets/images/history.png'),
})`
  width: 35px;
  height: 35px;
  resize-mode: contain;
`;

export const WrapperLayout = styled(AnimatedLayout)`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 10,
  },
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'never',
})``;
