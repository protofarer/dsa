import { BinarySearchTree, BSTNode } from "./BST";
import { inOrder } from "./BSTTraversals";

export const printInOrder = <T>(bst: BinarySearchTree<T>): void => {
  let out: T[] = [];
  inOrder(bst.root, (node) => {
    out.push(node.key);
  });
  console.log(`[ ${out.join(", ")} ]`);
};

//TODO print levels
