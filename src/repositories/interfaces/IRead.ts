export interface IRead<T> {
  findAll(): Promise<T[]>;
}
