export interface IWrite<T> {
  create(item: T): Promise<boolean>;
  update(items: T[]): Promise<boolean>;
  delete(): Promise<boolean>;
}
