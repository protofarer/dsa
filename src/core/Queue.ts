import { Node } from "./LinkedList";

export class Queue<T> {
  head: Node<T> | null | undefined;
  tail: Node<T> | null | undefined;
  length: number = 0;

  enqueue(x: T): void {
    const newNode = { val: x, next: null };
    if (!this.head) {
      this.head = this.tail = newNode;
      this.length++;
      return;
    }

    if (this.tail) 
      this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  dequeue(): T | null {
    if (!this.head) return null;

    this.length--;

    if (this.length === 0) {
      const val = this.head.val;
      this.head = this.tail = null;
      return val;
    }

    const oldHead = this.head;
    const newHead = this.head.next as Node<T>;
    oldHead.next = null;
    this.head = newHead;

    return oldHead.val;
  }

  peek(): T | null {
    return this.head ? this.head.val : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}
