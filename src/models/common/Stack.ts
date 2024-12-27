export class Stack<T> {
  private items: T[] = [];

  constructor(items?: T[]) {
    if (typeof items !== 'undefined') {
      this.items = items;
    }
  }

  // Add an element to the top of the stack.
  push(item: T): void {
    this.items.push(item);
  }

  // Remove and return the top element of the stack.
  pop(): T | undefined {
    return this.items.pop();
  }

  // Get the top element of the stack without removing it.
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty.
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the size of the stack.
  size(): number {
    return this.items.length;
  }

  // Clear all elements from the stack.
  clear(): void {
    this.items = [];
  }
}
