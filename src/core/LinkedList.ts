export type Node<T> = {
  val: T;
  next: Node<T> | null;
};

export class LinkedList<T> {
  head: Node<T> | null = null;

  constructor(initObj?: T[] | Node<T> | null) {
    if (arguments.length > 1) {
      throw Error("Must pass only one argument");
    } else if (Array.isArray(initObj)) {
      if (initObj.length > 0) {
        this.head = {
          val: initObj[0],
          next: null,
        };
        for (let i = 1; i < initObj.length; ++i) {
          this.append(initObj[i]);
        }
      } else {
        // empty array was passed, likely unintentional
        throw Error("Array must have at least one element");
      }
    } else if (initObj && (initObj.val === undefined || initObj.val === null)) {
      // bad object was passed, likely unintentional
      throw Error('"val" property cannot be undefined or null');
    }
  }

  insert(node: Node<T>): Node<T> | null {
    if (node.val === undefined)
      throw Error("Must provide a value on the node to insert!");

    if (!this.head) {
      this.head = node;
      return node;
    }

    node.next = this.head;
    this.head = node;
    return node;
  }

  // appends if idx greater than list's size
  insertByIndex(node: Node<T>, idx: number): Node<T> | null {
    if (node.val === undefined)
      throw Error("Must provide a value on the node to insert!");
    if (idx < 0) throw Error("Index must be >= 0");

    if (!this.head) return this.insert(node);

    let curr: Node<T> | null = this.head;
    let prev: Node<T> | undefined;
    let i = 0;
    while (curr) {
      if (i === idx) {
        break;
      }
      prev = curr;
      curr = curr.next;
      i++;
    }

    node.next = curr;
    if (prev) prev.next = node;
    return node;
  }

  // searches by value, returns node if successful
  search(val: T): Node<T> | null {
    if (typeof val !== "string" && typeof val !== "number")
      throw Error("Search value must be a string or number");

    let node: Node<T> | null = this.head;
    while (node) {
      if (node.val === val) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  getByIndex(idx: number): Node<T> | null {
    if (!this.head) throw Error("Cannot 'get' on an empty list");
    if (idx < 0) throw Error("idx must be >= 0");

    let curr: Node<T> | null = this.head;
    let i = 0;
    while (curr) {
      if (i === idx) {
        return curr;
      }
      curr = curr?.next;
      i++;
    }
    throw Error("idx out of range");
  }

  // ! by reference to Node object instance itself (pointer) or by value?
  delete(searchNode: Node<T>): Node<T> | null {
    let node: Node<T> | null = this.head;
    let prev: Node<T> | null = null;
    while (node) {
      if (node === searchNode) {
        if (node === this.head) {
          this.head = node.next;
        }
        if (prev) {
          prev.next = node.next;
        }
        node.next = null;
        return node;
      }
      prev = node;
      node = node.next;
    }
    return null;
  }

  deleteByIndex(idx: number): Node<T> | null {
    if (!this.head) return null;
    if (idx < 0) throw Error("idx must be > 0");

    let curr: Node<T> | null = this.head;
    let prev: Node<T> | undefined;
    let i = 0;
    while (curr) {
      if (i === idx) {
        if (prev) prev.next = curr.next;
        if (curr === this.head) this.head = curr.next;
        curr.next = null;
        return curr;
      }
      prev = curr;
      curr = curr.next;
      i++;
    }
    throw Error("idx out of range");
  }

  append(val: T): Node<T> | null {
    if (!this.head) {
      this.head = { val, next: null };
      return this.head;
    }

    let curr = this.head;
    while (curr?.next) {
      curr = curr.next;
    }
    curr.next = { val, next: null };
    return curr.next;
  }

  transform<U>(fn: (x: T) => U): LinkedList<U> | null {
    if (!this.head) return null;

    let list = new LinkedList<U>();
    let curr: Node<T> | null = this.head;
    while (curr) {
      list.append(fn(curr.val));
      curr = curr.next;
    }

    return list;
  }

  reverse(): void {
    if (!this.head) return;

    let prev = this.head;
    let curr: Node<T> | null | undefined = prev.next;
    this.head.next = null;
    while (curr) {
      const next: Node<T> | undefined | null = curr?.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}
