export type Node = {
  val: string | number;
  next: Node | null;
};

export class LinkedList {
  head: Node | null = null;

  constructor(initObj?: (string | number)[] | Node | null) {
    if (Array.isArray(initObj)) {
      if (initObj.length > 0) {
        this.head = {
          val: initObj[0],
          next: null,
        };
        for (let i = 1; i < initObj.length; ++i) {
          this.insert({ val: initObj[i], next: null });
        }
      }
    } else if (initObj && (initObj.val === undefined || initObj.val === null)) {
      // bad object was passed, probably unintentional
      throw Error(
        'Cannot make a LinkedList with "val" property undefined or null'
      );
    }
  }

  insert(node: Node | null): Node | null {
    if (!node || node.val === undefined)
      throw Error("Must provide something to insert!");

    if (!this.head) {
      this.head = node;
      return node;
    }

    node.next = this.head;
    this.head = node;
    return null;
  }

  // searches by value, returns node if successful
  search(val: Node["val"]): Node | null {
    if (typeof val !== "string" && typeof val !== "number")
      throw Error("Search value must be a string or number");

    let node: Node | null = this.head;
    while (node) {
      if (node.val === val) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  // ! by reference to Node object instance itself (pointer) or by value?
  delete(searchNode: Node): Node | null {
    let node: Node | null = this.head;
    let prev: Node | null = null;
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
}
