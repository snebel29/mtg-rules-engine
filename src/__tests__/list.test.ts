import { List } from '../models/common/List';

describe('List class', () => {
  let list: List<number>;

  beforeEach(() => {
    list = new List<number>();
  });

  test('Should initialize with an empty list', () => {
    expect(list.size()).toBe(0);
    expect(list.isEmpty()).toBe(true);
  });

  test('Should allow initializing with a predefined lit of items', () => {
    list = new List<number>([10, 20, 30]);
    expect(list.isEmpty()).toBe(false);
    expect(list.size()).toBe(3);
  });

  test('Should return full list of items', () => {
    expect(list.getItems()).toEqual([]); // List is empty.
    list = new List<number>([10, 20, 30]);
    expect(list.getItems()).toEqual([10, 20, 30]);
  });

  test('Should add an element to the list', () => {
    list.add(10);
    expect(list.size()).toBe(1);
    expect(list.get(0)).toBe(10);
  });

  test('Should allow popping elements off the list', () => {
    list.add(10);
    list.add(20);
    list.add(30);

    expect(list.pop()).toBe(30);
    expect(list.size()).toBe(2);

    expect(list.pop()).toBe(20);
    expect(list.size()).toBe(1);

    expect(list.pop()).toBe(10);
    expect(list.size()).toBe(0);

    expect(list.pop()).toBeUndefined(); // List is empty.
  });

  test('Should remove an element by index', () => {
    list.add(10);
    list.add(20);
    list.add(30);

    const removed = list.remove(1);
    expect(removed).toBe(20);
    expect(list.size()).toBe(2);
    expect(list.get(1)).toBe(30);
  });

  test('Should return undefined when removing an element with an invalid index', () => {
    list.add(10);
    const removed = list.remove(5); // Invalid index.
    expect(removed).toBeUndefined();
  });

  test('Should get an element by index', () => {
    list.add(10);
    list.add(20);
    list.add(30);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
    expect(list.get(2)).toBe(30);
  });

  test('Should return undefined when getting an element with an invalid index', () => {
    list.add(10);
    expect(list.get(1)).toBeUndefined(); // Invalid index
  });

  test('Should check if the list is empty', () => {
    expect(list.isEmpty()).toBe(true);
    list.add(10);
    expect(list.isEmpty()).toBe(false);
  });

  test('should return the correct size of the list', () => {
    expect(list.size()).toBe(0);
    list.add(10);
    list.add(20);
    expect(list.size()).toBe(2);
    list.remove(0);
    expect(list.size()).toBe(1);
  });

  test('Should clear the list', () => {
    list.add(10);
    list.add(20);
    list.clear();
    expect(list.size()).toBe(0);
    expect(list.isEmpty()).toBe(true);
  });

  test('Should convert the list to a string', () => {
    list.add(10);
    list.add(20);
    expect(list.toString()).toBe('10, 20');
    list.add(30);
    expect(list.toString()).toBe('10, 20, 30');
  });

  test('Should handle generic types', () => {
    const stringList = new List<string>();
    stringList.add('Hello');
    stringList.add('World');

    expect(stringList.size()).toBe(2);
    expect(stringList.pop()).toBe('World');
    expect(stringList.pop()).toBe('Hello');
    expect(stringList.isEmpty()).toBe(true);
  });
});
