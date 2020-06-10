export class Queue {
  constructor() {
    this.items = {};
    this.start = 0;
    this.end = 0;
  }

  print() {
    console.log(this.items);
  }

  enqueue(item) {
    this.items[this.end++] = item;
  }

  dequeue() {
    return this.items[this.start++];
  }

  find(value) {
    for(const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        if(items[key] === value) return parseInt(key);
      }
    }

    return -1;
  }

  clear() {
    this.items = {};
    this.start = 0;
    this.end = 0;
    return this.items;
  }

  peek() {
    return this.items[this.start];
  }

  size() {
    return this.end - this.start;
  }

  empty() {
    return this.size() === 0;
  }
}