/* eslint-disable no-undef */
import {expect} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should to add todo after tap', async () => {
    await element(by.id('add-todo-button')).typeText('Todo 1');
    await element(by.id('add-todo-button')).tapReturnKey();
    await expect(element(by.id('todo-item-0'))).toBeVisible();
    await expect(element(by.id('number-of-todos'))).toHaveText(
      'Você tem 1 tarefas',
    );
  });

  it('should checked to a todo', async () => {
    await element(by.id('todo-item-check-0')).tap();
    await expect(element(by.id('todo-item-uncheck-0'))).toExist();
  });

  it('should unchecked to a todo', async () => {
    await element(by.id('todo-item-uncheck-0')).tap();
    await expect(element(by.id('todo-item-uncheck-0'))).toNotExist();
  });

  it('should delete to a todo', async () => {
    await element(by.id('todo-item-remove')).atIndex(0).tap();
    await expect(element(by.id('number-of-todos'))).toHaveText(
      'Você tem 0 tarefas',
    );
  });

  it('should show zero todo', async () => {
    await device.reloadReactNative();
    await expect(element(by.id('number-of-todos'))).toHaveText(
      'Você tem 0 tarefas',
    );
  });
});
