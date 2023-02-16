export type TwoWayNode<T> = {
  key: T;
  prev?: TwoWayNode<T>;
  next?: TwoWayNode<T>;
};

export class DoublyLinkedList<T> {
  head: TwoWayNode<T> | null = null;
  tail: TwoWayNode<T> | null = null;
  length: number = 0;

  constructor(arr?: T[]) {
    if (Array.isArray(arr) && arr.length > 0) {
      for (let i = 0; i < arr.length; ++i) {
        this.insertByKey(arr[i]);
      }
    }
  }

  insert(node: TwoWayNode<T>) {
    if (!this.head) {
      this.head = this.tail = node;
      this.length++;
      return;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insertByKey(key: T) {
    if (!this.head) {
      this.head = this.tail = { key };
      this.length++;
      return;
    }

    const node: TwoWayNode<T> = { key };
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  search(key: T): TwoWayNode<T> | null {
    let curr: typeof this.head | undefined = this.head;
    while (curr) {
      if (curr.key === key) {
        return curr;
      }
      curr = curr.next;
    }

    return null;
  }

  delete(node: TwoWayNode<T>) {
    let curr: typeof this.head | undefined = this.head;
    while (curr) {
      if (curr === node) {
        if (curr === this.head) {
          this.head = curr.next || null;
        }
        if (curr === this.tail) {
          this.tail = curr.prev || null;
        }
        if (curr.next) {
          curr.next.prev = curr.prev;
        }
        if (curr.prev) {
          curr.prev.next = curr.next;
        }
        curr.next = curr.prev = undefined;
        this.length--;
      }
      curr = curr.next;
    }
  }

  // deletes first node found
  deleteByKey(key: T) {
    const node = this.search(key);
    node && this.delete(node);
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }

  reverse(): void {
    if (!this.head) return;

    // setup for in-betweens
    let prev = this.head;
    let curr = this.head?.next;

    // op on head first
    this.head.prev = this.head?.next;
    this.head.next = undefined;

    // swap head and tail
    const tail = this.tail;
    this.tail = this.head;
    this.head = tail;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      curr.prev = next;
      prev = curr;
      curr = next;
    }
  }

  getByIndex(idx: number): TwoWayNode<T> | null {
    if (idx > this.length - 1 || idx < 0) return null;

    let curr: typeof this.head | undefined = this.head;
    let i = 0;
    while (curr) {
      if (i === idx) {
        return curr;
      }
      curr = curr.next;
      i++;
    }
    return null;
  }

  split(idx: number): DoublyLinkedList<T> | null {
    // no-op
    if (idx <= 0 || idx >= this.length || this.length < 2) return null;

    // head is the essential refernce to List A, uses existing list
    // node @ idx is head of List B, new list
    //  loop insert through for List B
    const node = this.getByIndex(idx);
    if (!node) return null;

    // save for B
    const tailB = this.tail;

    // set and sever A's tail
    this.tail = node.prev ?? null;
    if (this.tail) this.tail.next = undefined;

    const lengthB = this.length - idx;
    this.length = idx;

    // ? metod for "splitted(node)": sets head, length and tail
    let b = new DoublyLinkedList<T>();

    // set and sever B's head
    b.insert(node);
    if (b.head) b.head.prev = undefined;

    b.length = lengthB;
    b.tail = tailB;

    return b;
  }
}
