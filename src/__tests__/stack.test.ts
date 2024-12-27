import { Stack } from '../models/common/Stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('Should start as an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test('Should allow initializing with a predefined lit of items', () => {
    stack = new Stack<number>([10, 20, 30]);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(3);
  });

  test('Should allow pushing elements onto the stack', () => {
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(10);

    stack.push(20);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(20);
  });

  test('Should allow popping elements off the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.pop()).toBe(30);
    expect(stack.size()).toBe(2);

    expect(stack.pop()).toBe(20);
    expect(stack.size()).toBe(1);

    expect(stack.pop()).toBe(10);
    expect(stack.size()).toBe(0);

    expect(stack.pop()).toBeUndefined(); // Stack is empty
  });

  test('Should allow peeking at the top element without removing it', () => {
    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);
    expect(stack.size()).toBe(2); // Size remains unchanged

    stack.pop();
    expect(stack.peek()).toBe(10);
  });

  test('Should clear all elements', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
    expect(stack.peek()).toBeUndefined();
  });

  test('Should handle generic types', () => {
    const stringStack = new Stack<string>();
    stringStack.push('Hello');
    stringStack.push('World');

    expect(stringStack.size()).toBe(2);
    expect(stringStack.peek()).toBe('World');
    expect(stringStack.pop()).toBe('World');
    expect(stringStack.pop()).toBe('Hello');
    expect(stringStack.isEmpty()).toBe(true);
  });
});
