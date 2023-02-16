type StackNode<T> = {
  value: T;
  prev?: StackNode<T>;
};

export class Stack<T> {
  head: StackNode<T> | null | undefined = null;
  length: number = 0;

  // extend to accept arrays
  push(x: T): void {
    if (!this.head) {
      this.head = { value: x };
      this.length++;
      return;
    }

    const node = { value: x, prev: this.head };
    this.head = node;
    this.length++;
  }

  pop(): T | null {
    if (!this.head) return null;

    const node = this.head;
    this.head = node.prev;
    node.prev = undefined;
    this.length--;
    return node.value;
  }

  peek(): T | null {
    return this.head ? this.head.value : null;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }

  clear(): void {
    if (!this.head) return;

    let curr: StackNode<T> | undefined = this.head;
    this.head = null;
    while (curr) {
      const prev: undefined | StackNode<T> = curr.prev;
      curr.prev = undefined;
      curr = prev;
    }
    this.length = 0;
  }
}
