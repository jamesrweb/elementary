export class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(item) {
    this.items[this.count] = item;
    this.count = this.count + 1;
    return this.count - 1;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count = this.count - 1;
    const deletedItem = this.items[this.count];
    this.items = this.items.slice(0, this.count);
    return deletedItem;
  }

  find(value) {
    for (let index = 0; index < this.size(); index++) {
      const item = this.items[index];
      if (Object.is(item, value)) {
        return index;
      }
    }

    return undefined;
  }

  peek() {
    return this.items[this.count - 1];
  }

  empty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = [];
    this.count = 0;
    return this.items;
  }
}