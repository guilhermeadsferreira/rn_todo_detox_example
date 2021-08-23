class Todo {
  constructor(
    public id: string,
    public todo: string,
    public closed: boolean,
    public deleted: boolean,
  ) {}
}

export default Todo;
