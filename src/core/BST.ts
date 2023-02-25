export type BSTNode<T> = {
  key: T;
  left?: BSTNode<T>;
  right?: BSTNode<T>;
  p?: BSTNode<T> | null;
};

interface BST<T> {
  root: BSTNode<T> | null;
  insert: (key: T) => BSTNode<T> | null;
  min: (node?: BSTNode<T>) => BSTNode<T> | null;
  minForKey: (key: T) => T | null;
  max: (node?: BSTNode<T>) => BSTNode<T> | null;
  maxForKey: (key: T) => T | null;
  search: (node: BSTNode<T>) => BSTNode<T> | null;
  searchByKey: (key: T) => BSTNode<T> | null;
  successor: (node: BSTNode<T> | null) => BSTNode<T> | null;
  predecessor: (node: BSTNode<T> | null) => BSTNode<T> | null;
  transplant: (node: BSTNode<T>, replacingNode?: BSTNode<T>) => void;
  delete: (node: BSTNode<T>) => void;
};

export class BinarySearchTree<T> implements BST<T> {
  public root: BSTNode<T> | null = null;

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

  // specify node, get node at min key
  min(node?: BSTNode<T> | null): BSTNode<T> | null {
    if (!this.root || node === null) return null;

    // verify node exists
    if (node && !this.searchByKey(node.key)) {
      return null;
    }

    let curr = node || this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr;
  }

  // specify a key, get min key
  minForKey(key?: T): T | null {
    if (!this.root) return null;

    let node: BSTNode<T> | null;

    if (key) {
      node = this.searchByKey(key);
      if (node === null) {
        // specified key doesn't exist
        return null;
      }
    } else {
      node = null;
    }

    let curr = node || this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.key;
  }

  max(node?: BSTNode<T> | null): BSTNode<T> | null {
    if (!this.root || node === null) return null;

    // verify node exists by matching the key
    if (node && !this.searchByKey(node.key)) {
      return null;
    }

    let curr = node || this.root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr;
  }

  maxForKey(key?: T): T | null {
    if (!this.root) return null;

    let node: BSTNode<T> | null;
    if (key) {
      node = this.searchByKey(key);
      if (node === null) {
        // specified key doesn't exist in tree
        return null;
      }
    } else {
      node = null;
    }

    let curr = node || this.root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.key;
  }

  private findByKey<T>(
    node: BSTNode<T> | undefined,
    key: T
  ): BSTNode<T> | undefined {
    if (!node || node?.key === key) return node;
    if (key < node.key) return this.findByKey(node?.left, key);
    else return this.findByKey(node?.right, key);
  }

  searchByKey(key: T): BSTNode<T> | null {
    if (!this.root) return null;
    return this.findByKey(this.root, key) ?? null;
  }

  private find<T>(
    node: BSTNode<T> | undefined,
    searchNode: BSTNode<T>
  ): BSTNode<T> | undefined {
    if (!node || searchNode === node) return node;
    if (searchNode.key < node.key) return this.find(node?.left, searchNode);
    else return this.find(node?.right, searchNode);
  }

  search(node: BSTNode<T> | null): BSTNode<T> | null {
    if (!this.root || !node) return null;
    return this.find(this.root, node) ?? null;
  }

  successor(node: BSTNode<T> | null): BSTNode<T> | null {
    if (!node) return null;
    if (!this.searchByKey(node.key)) return null;

    let curr = node;
    if (curr.right) return this.min(curr.right);

    let parent = node.p ?? null;
    while (parent && curr === parent.right) {
      curr = parent;
      parent = parent.p ?? null;
    }
    return parent;
  }

  predecessor(node: BSTNode<T> | null): BSTNode<T> | null {
    if (!node) return null;
    if (!this.searchByKey(node.key)) return null;

    let curr = node;
    if (curr.left) return this.max(curr.left);

    let parent = node.p ?? null;
    while (parent && curr === parent.left) {
      curr = parent;
      parent = parent.p ?? null;
    }
    return parent;
  }

  transplant(node: BSTNode<T>, replacingNode?: BSTNode<T>): void {
    if (!this.search(node)) return;

    if (!node.p) {
      this.root = replacingNode ?? null;
    } else if (node === node.p.left) {
      node.p.left = replacingNode;
    } else if (node === node.p.right) {
      node.p.right = replacingNode;
    }

    if (replacingNode) {
      replacingNode.p = node.p;
    }

    return;
  }

  delete(node: BSTNode<T>): void {
    if (!this.root || !this.search(node)) return;

    // case no children, remove parent's reference to this node
    if (!node?.left && !node?.right) {
      this.transplant(node);
    }

    // case one child, elevate child
    else if (!node?.left) {
      this.transplant(node, node.right);
    } else if (!node?.right) {
      this.transplant(node, node.left);
    }

    // case two children
    else {
      const successor = this.successor(node);
      if (successor) {
        // case when successor is not node's right child
        if (successor?.p !== node) {
          this.transplant(successor, successor.right);
          successor.right = node.right;
          successor.right.p = successor;
        }

        // replace node with successor while keeping node's left subtree
        this.transplant(node, successor);
        successor.left = node.left;
        successor.left.p = successor;
      }
    }
  }
}
