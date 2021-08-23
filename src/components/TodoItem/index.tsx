import React from 'react';
import {useContext} from 'react';
import Animated, {
  Layout,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated';
import {MainContext} from '../../contexts/MainContext';
import Todo from '../../entities/Todo';
import {
  Container,
  TodoCheck,
  Checked,
  TodoText,
  ActionContainer,
  TrashImage,
  RecoveryImage,
} from './styles';

interface ITodo {
  item: Todo;
  index: number;
}

const TodoItem: React.FC<ITodo> = ({item, index}) => {
  const {removeTodo, updateTodoStatus, recoveryItemOfHistory} =
    useContext(MainContext);

  return (
    <Animated.View
      entering={SlideInRight.delay(index * 100)}
      layout={Layout.springify()}
      exiting={SlideOutRight}>
      <Container closed={item.closed} testID={`todo-item-${index}`}>
        {!item.deleted && (
          <TodoCheck
            onPress={() => updateTodoStatus(item.id)}
            testID={
              item.closed
                ? `todo-item-uncheck-${index}`
                : `todo-item-check-${index}`
            }>
            {item.closed ? <Checked /> : null}
          </TodoCheck>
        )}
        <TodoText numberOfLines={1}>{item.todo}</TodoText>
        {item.deleted ? (
          <ActionContainer
            onPress={() => {
              recoveryItemOfHistory({...item, deleted: false});
            }}
            testID={`todo-item-recovery-${index}`}>
            <RecoveryImage />
          </ActionContainer>
        ) : (
          <ActionContainer
            onPress={() => {
              removeTodo(item.id);
            }}
            testID={'todo-item-remove'}>
            <TrashImage />
          </ActionContainer>
        )}
      </Container>
    </Animated.View>
  );
};

export default TodoItem;
