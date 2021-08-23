import React from 'react';
import {useContext} from 'react';
import TodoItem from '../../components/TodoItem';
import {MainContext} from '../../contexts/MainContext';
import {
  Container,
  Header,
  HeaderTitle,
  WrapperLayout,
  Scroll,
  TodoNumber,
  TodoInput,
  HistoryButton,
  HistoryImage,
} from './styles';

const Home: React.FC = ({navigation}) => {
  const {todos, addNewTodo, todoInput, setTodoInput} = useContext(MainContext);

  return (
    <Container>
      <Header>
        <HeaderTitle>to.do</HeaderTitle>
        <TodoNumber testID="number-of-todos">
          Você tem <TodoNumber isBold>{`${todos.length} tarefas`}</TodoNumber>
        </TodoNumber>
      </Header>
      <TodoInput
        placeholder="Adicione uma tarefa"
        onSubmitEditing={() => addNewTodo()}
        onChangeText={text => setTodoInput(text)}
        value={todoInput}
        returnKeyType="go"
        testID="add-todo-button"
      />
      <WrapperLayout>
        <Scroll>
          {todos.map((item, index) => (
            <TodoItem key={`key-${index}`} item={item} index={index} />
          ))}
        </Scroll>
      </WrapperLayout>
      <HistoryButton
        onPress={() => navigation.navigate('History')}
        testID="history-button">
        <HistoryImage />
      </HistoryButton>
    </Container>
  );
};

export default Home;
