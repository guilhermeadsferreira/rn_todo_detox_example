/* eslint-disable no-undef */
import {expect} from 'detox';

describe('History Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should adding todo', async () => {
    await element(by.id('add-todo-button')).typeText('Todo 1');
    await element(by.id('add-todo-button')).tapReturnKey();
    await expect(element(by.id('number-of-todos'))).toHaveText(
      'Você tem 1 tarefas',
    );
  });

  it('should remove todo', async () => {
    await element(by.id('todo-item-remove')).atIndex(0).tap();
    await expect(element(by.id('number-of-todos'))).toHaveText(
      'Você tem 0 tarefas',
    );
  });

  it('should navigate to recovery todo screen', async () => {
    await element(by.id('history-button')).tap();
    await expect(element(by.id('history-title'))).toExist();
  });

  it('should recovery todo', async () => {
    await element(by.id('todo-item-recovery-0')).tap();
    await expect(element(by.id('todo-item-recovery-0'))).toNotExist();
  });

  it('should go back to todo screen', async () => {
    await device.pressBack();
  });
});
