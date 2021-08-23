import styled from 'styled-components/native';

interface ITodo {
  closed?: boolean;
}

export const Container = styled.View<ITodo>`
  ${({closed, theme: {mainGrey, lightGrey}}) => `
    width: 100%;
    height: 50px;
    background-color: ${closed ? lightGrey : mainGrey};
		margin-bottom: 6px;
		align-items: center;
		padding: 0 4%;
    flex-direction: row;
  `}
`;

export const TodoCheck = styled.TouchableOpacity`
  border-color: #bababa;
  border-width: 1px;
  height: 25px;
  width: 25px;
  border-radius: 6px;
  margin-right: 10px;
`;

export const TodoText = styled.Text`
  ${({theme: {regular}}) => `
    font-family: ${regular};
    flex: 1;
  `}
`;

export const TrashImage = styled.Image.attrs({
  source: require('../../assets/images/trash.png'),
})`
  width: 20px;
  height: 20px;
`;

export const ActionContainer = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const RecoveryImage = styled.Image.attrs({
  source: require('../../assets/images/loop.png'),
})`
  width: 20px;
  height: 20px;
`;

export const Checked = styled.Image.attrs({
  source: require('../../assets/images/check.png'),
})`
  width: 20px;
  height: 20px;
  align-self: center;
`;
