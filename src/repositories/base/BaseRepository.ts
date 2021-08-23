import {IRead} from '../interfaces/IRead';
import {IWrite} from '../interfaces/IWrite';
import AsyncStorage from '@react-native-async-storage/async-storage';

abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  constructor(public readonly collection: string) {}

  async create(item: T): Promise<boolean> {
    try {
      const hasCollection = await AsyncStorage.getItem(this.collection);

      if (!hasCollection) {
        const jsonValue = JSON.stringify([item]);
        await AsyncStorage.setItem(this.collection, jsonValue);
        return true;
      }

      const newCollection = [...JSON.parse(hasCollection), item];
      const jsonCollection = JSON.stringify(newCollection);
      await AsyncStorage.setItem(this.collection, jsonCollection);
      return true;
    } catch (e) {
      return false;
    }
  }

  async update(items: T[]): Promise<boolean> {
    try {
      const jsonValue = JSON.stringify(items);
      await AsyncStorage.setItem(this.collection, jsonValue);
      return true;
    } catch (e) {
      return false;
    }
  }

  async delete(): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(this.collection);
      return true;
    } catch (e) {
      return false;
    }
  }

  async findAll(): Promise<T[]> {
    try {
      const hasItems = await AsyncStorage.getItem(this.collection);

      if (!hasItems) {
        return [];
      }

      const items = JSON.parse(hasItems);
      return items;
    } catch (e) {
      return [];
    }
  }
}

export default BaseRepository;
