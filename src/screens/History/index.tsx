import React, {useContext} from 'react';
import TodoItem from '../../components/TodoItem';
import {MainContext} from '../../contexts/MainContext';
import {Container, Header, HeaderTitle, WrapperLayout, Scroll} from './styles';

const History: React.FC = () => {
  const {todosDeleted} = useContext(MainContext);

  return (
    <Container>
      <Header>
        <HeaderTitle testID="history-title">history</HeaderTitle>
      </Header>
      <WrapperLayout>
        <Scroll>
          {todosDeleted.map((item, index) => (
            <TodoItem key={`key-${index}`} item={item} index={index} />
          ))}
        </Scroll>
      </WrapperLayout>
    </Container>
  );
};

export default History;
