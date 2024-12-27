export class List<T> {
  private items: T[] = [];

  constructor(items?: T[]) {
    if (typeof items !== 'undefined') {
      this.items = items;
    }
  }

  // Add an element to the end of the list.
  push(item: T): void {
    this.items.push(item);
  }

  // Remove and return an element at a specific index.
  remove(index: number): T | undefined {
    if (index < 0 || index >= this.items.length) {
      return undefined; // Return undefined if index is out of bounds
    }
    return this.items.splice(index, 1)[0]; // Splice returns an array, so we take the first element
  }

  // Return the full list of items.
  getItems(): T[] {
    return this.items;
  }

  // Remove and return the top element of the list.
  pop(): T | undefined {
    return this.items.pop();
  }

  // Get an element at a specific index.
  get(index: number): T | undefined {
    if (index < 0 || index >= this.items.length) {
      return undefined; // Return undefined if index is out of bounds
    }
    return this.items[index];
  }

  // Check if the list is empty.
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the number of elements in the list.
  size(): number {
    return this.items.length;
  }

  // Clear all elements from the list.
  clear(): void {
    this.items = [];
  }

  // Convert the list to a string (for easy logging or debugging).
  toString(): string {
    return this.items.join(', ');
  }
}
