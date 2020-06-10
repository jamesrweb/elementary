export class Stack {
  constructor() {
    this.items = [];
  }

  print() {
    console.log(this.items);
  }

  push(item) {
    this.items.push(item);
    return this.items.length - 1;
  }

  pop() {
    return this.items.pop();
  }

  find(value) {
    for (let index = 0; index < this.size(); index++) {
      const item = this.items[index];
      if (Object.is(item, value)) return index;
    }

    return -1;
  }

  clear() {
    this.items.length = 0;
    return this.items;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  empty() {
    return this.size() === 0;
  }
}