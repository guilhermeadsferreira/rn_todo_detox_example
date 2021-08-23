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
