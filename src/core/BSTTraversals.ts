import { BSTNode } from "./BST";

export const dfs = <T>(root: BSTNode<T>, needle: T): boolean | null => {
  const find = (node: BSTNode<T> | undefined, needle: T): boolean | null => {
    if (!node) return false;
    if (node.key === needle) return true;
    if (needle <= node.key) return find(node?.left, needle);
    else return find(node?.right, needle);
  };

  return find(root, needle);
};

export const inOrder = <T>(
  root: BSTNode<T> | null,
  callback: (node: BSTNode<T>) => void
): void => {
  const walk = (
    node: BSTNode<T> | undefined,
    callback: (node: BSTNode<T>) => void
  ) => {
    if (node) {
      walk(node.left, callback);
      callback(node);
      // arr.push(node);
      walk(node.right, callback);
    }
  };

  if (!root) throw Error("Cannot traverse empty binary search tree");

  // let path: BSTNode<T>[] = [];
  walk(root, callback);
};
