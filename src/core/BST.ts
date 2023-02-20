export type BSTNode<T> = {
  key: T;
  left?: BSTNode<T>;
  right?: BSTNode<T>;
  p?: BSTNode<T> | null;
};

export class BinarySearchTree<T> {
  root: BSTNode<T> | null = null;

  constructor(arr?: T[]) {
    if (Array.isArray(arr) && arr.length > 0) {
      arr.forEach((x) => this.insert(x));
    } else if (arr) {
      throw Error("Invalid argument for initializing Binary Tree");
    }
  }

  insert(key: T): BSTNode<T> | null {
    // console.log(`inserting x`, key);
    let curr: BSTNode<T> | null | undefined = this.root;
    let parent: BSTNode<T> | null | undefined = curr?.p;

    while (curr) {
      // console.log(`parent of ${curr?.key} is ${parent?.key}`);

      parent = curr;
      if (key < curr.key) curr = curr.left;
      else curr = curr.right;
    }

    let node: BSTNode<T> = { key, p: parent };

    if (!parent) {
      // console.log(`assigning root`);
      this.root = node;
    } else if (node.key < parent.key) {
      // console.log(`inserting ${key} left of ${parent.key}`);
      parent.left = node;
    } else {
      // console.log(`inserting ${key} right of ${parent.key}`);
      parent.right = node;
    }

    return node;
  }

  min(): T | null {
    if (!this.root) return null;
    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.key;
  }

  max(): T | null {
    if (!this.root) return null;
    let curr = this.root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.key;
  }

  search(key: T): BSTNode<T> | null {
    if (!this.root) return null;

    const find = <T>(
      node: BSTNode<T> | undefined,
      key: T
    ): BSTNode<T> | undefined => {
      if (!node || node?.key === key) return node;
      if (key < node.key) return find(node?.left, key);
      else return find(node?.right, key);
    };

    return find(this.root, key) ?? null;
  }
}
